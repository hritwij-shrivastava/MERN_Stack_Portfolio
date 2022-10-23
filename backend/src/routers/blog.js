'use strict';
const path = require('path');
const dotenv = require('dotenv').config();
const fs = require('fs').promises;
const fsExtra = require('fs-extra');

const pdfPgCount = require('pdf-page-counter');

const libre = require('libreoffice-convert');
libre.convertAsync = require('util').promisify(libre.convert);

const { exec, spawn } = require('node:child_process');

const jwt = require("jsonwebtoken");

const csvtojsonV2 = require("csvtojson");

const express = require('express')
var ObjectId = require('mongodb').ObjectId;
const Users = require('../mongoose/models/users')
const Blogs = require('../mongoose/models/blogs')
const upload = require('../middleware/upload')
const router = express.Router()
// const keys = require("../keys");

const crypto = require("crypto");

const storageLoc = path.join("..", "backend", "src", "frontend", "public", "static", "blog", "user", "/")
const removeExtraPath = '../backend/src/frontend'

// To check if a id is valid or not
function isValidObjectId(id) {

    if (ObjectId.isValid(id)) {
        if ((String)(new ObjectId(id)) === id)
            return true;
        return false;
    }
    return false;
}

// To check if a Blog id is valid or not
function isValidBlogId(id) {

    if (id === "" || id === null || (typeof id === "undefined")) {
        return false;
    }
    else {
        if (id.match(/^[0-9]{7,12}$/)) {
            return true;
        }
        else {
            return false;
        }
    }
}

function ValidateIPaddress(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
        return (true)
    }
    return (false)
}

// Router fetch all published blog 
router.get('/get', async (req, res) => {
    try {
        var size = req.query.size
        var page = Math.floor(req.query.page)
        var type = req.query.type

        var outBlog = []
        var recent = []
        var popular = []
        var startPoint = 0
        var endPoint = 0
        var blogs = []

        if (!size || size === '' || typeof size === 'undefined' || !(String(size).match(/^[1-9]{1,100}$/))) {
            size = 1
        }

        if (!type || type === '' || typeof type === 'undefined' || !(String(type).match(/^[1-2]{1}$/))) {
            type = 1
        }

        blogs = await Blogs.find({ status: 1, type: type },{_id:0,userId:0,viewCount:0,__v:0})



        var len = Object.keys(blogs).length
        var maxPage = Math.ceil(len / size)

        if (len > 0) {
            recent = await Blogs.find({ status: 1 },{_id:0,userId:0,viewCount:0,__v:0}).sort({ _id: -1 }).limit(5);
            popular = await Blogs.find({ status: 1 },{_id:0,userId:0,viewCount:0,__v:0}).sort({ totalView: -1 }).limit(5)

            if ((!page) || page == "" || typeof page === 'undefined' || !(String(page).match(/^[0-9]{1,1000}$/))) {
                page = 1
            }
            if (page < 0) {
                page = 1
            }

            if (page === 1 || (page > 1 && page > maxPage)) {
                startPoint = 0
                if (len > size) {
                    endPoint = size - 1
                }
                else {
                    endPoint = len - 1
                }
            }
            if (page > 1 && page <= maxPage) {
                startPoint = (size * (page - 1))

                if (len > ((size * (page - 1)) + size)) {
                    endPoint = ((size * (page - 1)) + size) - 1
                }
                else {
                    endPoint = len - 1
                }
            }

            var j = 0

            for (let i = startPoint; i <= endPoint; i++) {
                outBlog[j] = blogs[i]
                j = j + 1
            }
        }


        return res.status(200).json({ blogs: outBlog, totalLength: len, recent: recent, popular: popular })


    }
    catch (error) {
        return res.status(500).send(error.message)
    }
})

// Router fetch blog details of single blog
router.get('/blogpage/:id', async (req, res) => {
    try {
        var blogId = req.params.id
        var status = 1
        var checkId = isValidBlogId(blogId)
        if (checkId) {
            const inblogs = await Blogs.findOne({ blogId, status })

            if (inblogs) {
                var blogs = {}

                blogs['blogId'] = inblogs['blogId']
                blogs['blogTitle'] = inblogs['blogTitle']
                blogs['tagArray'] = inblogs['tagArray']
                blogs['textAreaArray'] = inblogs['textAreaArray']
                blogs['totalView'] = inblogs['totalView']
                blogs['status'] = inblogs['status']
                blogs['type'] = inblogs['type']
                blogs['url'] = inblogs['url']
                blogs['date'] = inblogs['date']

                return res.status(200).json(blogs)
            }
            else {
                return res.status(404).json({ err: "No Blog present with given id" })
            }
        }
        else {
            return res.status(500).json({ err: "Not a valid id" })
        }
    }
    catch (error) {
        return res.status(500).send("some error occured")
    }
})

// Router update view count on published blog 
router.get('/updateview', async (req, res) => {
    try {
        const ip = req.query.ip
        var blogId = req.query.id
        const valid = ValidateIPaddress(ip)
        var checkId = isValidBlogId(blogId)
        if (valid && checkId) {
            const blog = await Blogs.findOne({ blogId })
            const _id = blog._id
            var viewCount = blog.viewCount
            var totalView = blog.totalView
            let prev_count
            let new_count

            if (viewCount === "" || viewCount === null || (typeof viewCount === "undefined")) {
                viewCount = {}

            }
            if (ip in viewCount) {
                prev_count = viewCount[ip]
                new_count = prev_count + 1
            }
            else {
                new_count = 1
            }
            viewCount[ip] = new_count
            totalView = totalView + 1


            const update = await Blogs.findByIdAndUpdate(_id, { $set: { viewCount, totalView } }, { new: true })
            update.save()
            
        }
        return res.status(200).send("")

    }
    catch (error) {
        return res.status(500).send(error.message)
    }
})


// Router fetch all blog for particular user
router.get('/user', async (req, res) => {
    try {
        var token = (req.headers.token).replace("Bearer ", "")

        jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
            if (!err) {
                const userId = decoded.id
                const blogs = await Blogs.find({ userId })
                return res.status(200).json(blogs)
            }
            if (err) {
                return res.status(500).send(err.message)
            }
        })

    }
    catch (error) {
        return res.status(500).send("some error occured")
    }
})

// Router create new blog
router.post('/new', async (req, res) => {
    try {
        var token = (req.headers.token).replace("Bearer ", "")

        jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
            if (!err) {
                // const blogId = crypto.randomInt(1000000, 10000000000)
                var blogs = await Blogs.find({ status: { $in : [ 0, 1, 2, 3 ] } })
                const blogId = 1000001 + Object.keys(blogs).length 
                const userId = decoded.id
                var blogTitle = "(Untitled)"
                var tagArray = { 0: 'thumbnail', 1: '' }
                var textAreaArray = { 0: {1:null,2:''}, 1: '' }
                var status = 0
                var url = "/read/" + blogId + "/this-blog-has-no-title"


                const blog = new Blogs({
                    blogId, userId, blogTitle, tagArray, textAreaArray, status, url
                })

                blog.save()

                const last_blog = await Blogs.find({ userId }).sort({ _id: -1 }).limit(1);


                return res.status(200).json({ last_blog: last_blog, err: ""})
            }
            if (err) {
                return res.status(500).json({ err: err.message })
            }
        })

    }
    catch (error) {
        // console.error(error.message)
        return res.status(500).json({ err: err.message })
    }
})

// Set Status of blog
router.post('/status/:id', async (req, res) => {
    try {
        var token = (req.headers.token).replace("Bearer ", "")
        var _id = req.params.id
        var checkId = isValidObjectId(_id)

        if (checkId) {
            jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
                if (!err) {
                    const userId = decoded.id
                    const { status } = req.body
                    const blogs = await Blogs.findOne({ _id, userId })
                    if (blogs) {
                        const blog = await Blogs.findByIdAndUpdate(req.params.id, { $set: { status } }, { new: true })

                        blog.save()
                        const blogNew = await Blogs.find({ userId })
                        if (status === 1) {

                            return res.status(200).json({ blogs: blogNew, err: "", msz: "Blog Published" })

                        }
                        if (status === 0) {
                            return res.status(200).json({ blogs: blogNew, err: "", msz: "Blog saved as draft" })
                        }
                    }
                    else {
                        return res.status(500).json({ err: "You are not authenticated" })
                    }
                }
                if (err) {
                    return res.status(500).json({ err: err.message })
                }
            })
        }
        else {
            return res.status(500).json({ err: "Not a valid id" })
        }
    }
    catch (error) {
        // console.error(error.message)
        return res.status(500).send("some error occured")
    }
})

// Router Delete a blog
router.delete('/delete/:id', async (req, res) => {

    try {
        var token = (req.headers.token).replace("Bearer ", "")
        var id = req.params.id
        var checkId = isValidObjectId(id)
        if (checkId) {
            jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
                if (!err) {
                    const userId = decoded.id
                    Blogs.deleteOne({ "_id": ObjectId(id), "userId": userId }, async (err, obj) => {
                        if (obj.deletedCount === 1) {
                            const blogs = await Blogs.find({ userId })
                            return res.status(200).json({ blogs: blogs, err: "", msz: "Blog Deleted" })
                        }
                        if (obj.deletedCount === 0) {
                            return res.status(200).json({ err: "No blog present" })
                        }
                    })
                }
                if (err) {
                    return res.status(500).send(err.message)
                }
            })
        }
        else {
            return res.status(500).json({ err: "Not a valid id" })
        }


    }
    catch (error) {
        return res.status(500).send("some error occured")
    }

})

// Router Edit blog
router.get('/edit/:id', async (req, res) => {
    try {
        var token = (req.headers.token).replace("Bearer ", "")
        var _id = req.params.id
        var checkId = isValidObjectId(_id)
        if (checkId) {
            jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
                if (!err) {
                    const userId = decoded.id
                    const blogs = await Blogs.findOne({ _id, userId })
                    return res.status(200).json(blogs)
                }
                if (err) {
                    return res.status(500).json({ err: err.message })
                }
            })
        }
        else {
            return res.status(500).json({ err: "Not a valid id" })
        }

    }
    catch (error) {
        res.status(500).json({ err: error.message })
    }
})

// Update a blog
router.post('/update/:id', async (req, res) => {
    try {
        var token = (req.headers.token).replace("Bearer ", "")
        var _id = req.params.id
        var url = ""
        var checkId = isValidObjectId(_id)
        if (checkId) {
            jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
                if (!err) {
                    const userId = decoded.id
                    var { blogTitle, tagArray, textAreaArray, status, type } = req.body

                    blogTitle = blogTitle.trim()
                    const blogs = await Blogs.findOne({ _id, userId })

                    if (blogs) {
                        if (blogTitle === "" || blogTitle.trim().length === 0 || blogTitle === "(Untitled)") {
                            blogTitle = "(Untitled)"
                            url = "/read/" + blogs.blogId + "/this-blog-has-no-title"
                        }
                        else {
                            url = "/read/" + blogs.blogId + "/" + (((blogTitle.trim()).toLowerCase()).split(" ")).join("-")
							url = url.replace("---", "-")
                        }

                        const blog = await Blogs.findByIdAndUpdate(_id, { $set: { blogTitle, tagArray, textAreaArray, status, url, type } }, { new: true })

                        blog.save()
                        if (status === 1) {
                            return res.status(200).send("Blog Published")
                        }
                        if (status === 0) {
                            return res.status(200).send("Blog saved as draft")
                        }
                    }
                    else {
                        return res.status(500).send("You are not authenticated")
                    }
                }
                if (err) {
                    return res.status(500).send(err.message)
                }
            })
        }
        else {
            return res.status(500).json({ err: "Not a valid id" })
        }

    }
    catch (error) {
        // console.error(error.message)
        return res.status(500).send("some error occured")
    }
})

// Router to Upload Images into user blogID Folder
router.post('/updateimg/:id', async (req, res) => {

    try {
        var token = (req.headers.token).replace("Bearer ", "")
        var _id = req.params.id
        var checkId = isValidObjectId(_id)
        if (checkId) {
            jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
                if (!err) {
                    const userId = decoded.id
                    const user = await Users.findOne({ _id: userId })
                    const blogs = await Blogs.findOne({ _id, userId })
                    const user_name = (user.name.replace(/\s+/g, '-')).toLowerCase()
                    const blog_uid = blogs.blogId                    
                    if (blogs) {
                        const uploadImage = upload.array('img', 50);

                        uploadImage(req, res, function (err) {
                            if (err) {
                                return res.status(400).send("Maximum 50 Pictures are allowed at a time")
                            }
                            else{
                                const func = async()=>{
                                    const tagArray = blogs.tagArray
                                    var textAreaArray = blogs.textAreaArray
                                    var imgPos = []     //To store Image position(Index) in textAreaArray
                                    let dir = path.join(storageLoc , user_name.toString() , blog_uid.toString() , "/img/")
                                    fsExtra.rmSync(dir, { recursive: true, force: true });
            
                                    for (var key of Object.keys(tagArray)) {
                                        if ((tagArray[key] === 'img') || (tagArray[key] === 'thumbnail')) {
                                            imgPos.push(key)
                                        }
                                    }
            
                                    for (let i = 0; i < req.files.length; i++) {
                                        let source = req.files[i].path
                                        let destination = dir + req.files[i].filename
                                        fsExtra.move(source, destination,)
            
                                        textAreaArray[imgPos[i]][1] = (destination.replace(/\\/g, '/')).replace(removeExtraPath, "");
                                    }
            
                                    await Blogs.findByIdAndUpdate(req.params.id, { $set: { textAreaArray } }, { new: true })
            
                                    return res.status(200).send("Images uploaded successfully")
                                }
                                func()
                            }
                        })
                    }
                    else {
                        return res.status(500).send("You are not authenticated")
                    }
                }
                if (err) {
                    return res.status(500).send(err.message)
                }
            })
        }
        else {
            return res.status(500).json({ err: "Not a valid id" })
        }

    }
    catch (error) {
        // console.error(error.message)
        return res.status(500).send("some error occured")
    }



})

// Router to Convert PPT into Pdf then to Images
router.post('/updatepptx/:id', async (req, res) => {

    try {
        var token = (req.headers.token).replace("Bearer ", "")
        var _id = req.params.id
        var pdfPages = ""
        var inputPath = ""
        var outputPath = ""
        let obj = {}

        var checkId = isValidObjectId(_id)
        if (checkId) {
            jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
                if (!err) {
                    const userId = decoded.id
                    const user = await Users.findOne({ _id: userId })
                    const blogs = await Blogs.findOne({ _id, userId })
                    const user_name = (user.name.replace(/\s+/g, '-')).toLowerCase()
                    const blog_uid = blogs.blogId                    
                    if (blogs) {
                        const uploadImage = upload.array('pptx', 1)

                        uploadImage(req, res, function (err) {
                            if (err) {
                                return res.status(400).send("Maximum 1 PPT per blog is allowed")
                            }
                            else{
                                const func = async()=>{
                                    const tagArray = blogs.tagArray
                                    var textAreaArray = blogs.textAreaArray
                                    var pptxPos = []     //To store PPT position(Index) in textAreaArray
                                    let dir = path.join(storageLoc , user_name.toString() ,  blog_uid.toString() , "/pptx/" )
                                    fsExtra.rmSync(dir, { recursive: true, force: true });
            
                                    for (var key of Object.keys(tagArray)) {
                                        if (tagArray[key] === 'pptx') {
                                            pptxPos.push(key)
                                        }
                                    }
            
            
                                    for (let i = 0; i < req.files.length; i++) {
                                        let source = req.files[i].path
                                        let destination = path.join(dir , req.files[i].filename)
                                        await fsExtra.move(source, destination,)
            
                                        // ----------------Now Convert PPT Files to PDF ---------------------------
            
                                        const ext = '.pdf'
                                        inputPath = destination;
                                        outputPath = path.join(dir , `${req.files[i].filename}${ext}`);
            
                                        const docxBuf = await fs.readFile(inputPath);
            
                                        // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)
                                        let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);
            
                                        // Here in done you have pdf file which you can save or transfer in another stream
                                        await fs.writeFile(outputPath, pdfBuf);
            
                                        let dataBuffer = fsExtra.readFileSync(outputPath, () => { });
            
                                        // ----------------Count Converted PDF Pages ---------------------------
            
                                        pdfPgCount(dataBuffer).then(async function (data) {
            
                                            // number of pages
                                            pdfPages = data.numpages
                                            obj['pptx'] = (inputPath.replace(/\\/g, '/')).replace(removeExtraPath, "");
                                            obj['pdf'] = (outputPath.replace(/\\/g, '/')).replace(removeExtraPath, "");
            
                                            var dirUrl = (dir.replace(/\\/g, '/')).replace(removeExtraPath, "");
            
                                            obj['img'] = Array.from({ length: pdfPages }, (x, i) => `${dirUrl}img-${i}.jpg`);
                                            textAreaArray[pptxPos[i]] = obj
            
                                            await Blogs.findByIdAndUpdate(req.params.id, { $set: { textAreaArray } }, { new: true })
                                        });
            
                                        // ----------------Now Convert Pdf to JPG ---------------------------
                                        await exec(
                                            `sudo convert "${outputPath}" -quality 100 "${dir}img.jpg"`,
                                            // in ubuntu change above `sudo convert "${outputPath}" -quality 100 "${dir}img.jpg"`
                                            (err, stdout, stderr) => {
                                                if (err) {
                                                    console.log(err);
                                                }
                                            }
                                        )
                                    }
                                    return res.status(200).send("PPT uploaded successfully")
                                }
                                func()
                            }
                        })
                    }
                    else {
                        return res.status(500).send("You are not authenticated")
                    }
                }
                if (err) {
                    return res.status(500).send(err.message)
                }
            })
        }
        else {
            return res.status(500).json({ err: "Not a valid id" })
        }

    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured")
    }

})

// Router to Upload PDF into user blogID Folder
router.post('/updatepdf/:id', async (req, res) => {

    try {
        var token = (req.headers.token).replace("Bearer ", "")
        var _id = req.params.id
        var checkId = isValidObjectId(_id)
        if (checkId) {
            jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
                if (!err) {
                    const userId = decoded.id
                    const user = await Users.findOne({ _id: userId })
                    const blogs = await Blogs.findOne({ _id, userId })
                    const user_name = (user.name.replace(/\s+/g, '-')).toLowerCase()
                    const blog_uid = blogs.blogId 
                    if (blogs) {
                        const uploadImage = upload.array('pdf', 5)

                        uploadImage(req, res, function (err) {
                            if (err) {
                                return res.status(400).send("Maximum 5 Pdfs are allowed per blog")
                            }
                            else{
                                const func = async()=>{
                                    const tagArray = blogs.tagArray
                                    var textAreaArray = blogs.textAreaArray
                                    var pdfPos = []     //To store Pdf position(Index) in textAreaArray
                                    let dir = path.join(storageLoc , user_name.toString() , blog_uid.toString(), "/pdf/" )
                                    fsExtra.rmSync(dir, { recursive: true, force: true });
            
                                    for (var key of Object.keys(tagArray)) {
                                        if (tagArray[key] === 'pdf') {
                                            pdfPos.push(key)
                                        }
                                    }
            
                                    for (let i = 0; i < req.files.length; i++) {
            
                                        let source = req.files[i].path
                                        let destination = path.join(dir , req.files[i].filename)
                                        fsExtra.move(source, destination,)
            
                                        textAreaArray[pdfPos[i]] = (destination.replace(/\\/g, '/')).replace(removeExtraPath, "");
                                    }

                                    await Blogs.findByIdAndUpdate(req.params.id, { $set: { textAreaArray } }, { new: true })
            
                                    return res.status(200).send("Pdf uploaded successfully")
                                }
                                func()
                            }
                        })
                    }
                    else {
                        return res.status(500).send("You are not authenticated")
                    }
                }
                if (err) {
                    return res.status(500).send(err.message)
                }
            })
        }
        else {
            return res.status(500).json({ err: "Not a valid id" })
        }

    }
    catch (error) {
        // console.error(error.message)
        return res.status(500).send("some error occured")
    }

})

// Router to Upload CSV into user blogID Folder
router.post('/updatecsv/:id', async (req, res) => {

    try {
        var token = (req.headers.token).replace("Bearer ", "")
        var _id = req.params.id
        var checkId = isValidObjectId(_id)
        if (checkId) {
            jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
                if (!err) {
                    const userId = decoded.id
                    const user = await Users.findOne({ _id: userId })
                    const blogs = await Blogs.findOne({ _id, userId })
                    const user_name = (user.name.replace(/\s+/g, '-')).toLowerCase()
                    const blog_uid = blogs.blogId 
                    if (blogs) {
                        const uploadImage = upload.array('csv', 5)

                        uploadImage(req, res, function (err) {
                            if (err) {
                                return res.status(400).send("Maximum 5 CSV are allowed per blog")
                            }
                            else{
                                const func = async()=>{
                                    const tagArray = blogs.tagArray
                                    var textAreaArray = blogs.textAreaArray
                                    var csvPos = []     //To store Pdf position(Index) in textAreaArray
                                    let dir = path.join(storageLoc , user_name.toString() , blog_uid.toString() , "/csv/" )
                                    fsExtra.rmSync(dir, { recursive: true, force: true });
            
                                    var source = ""
                                    var destination = ""
            
                                    for (var key of Object.keys(tagArray)) {
                                        if (tagArray[key] === 'csv') {
                                            csvPos.push(key)
                                        }
                                    }
            
                                    for (let i = 0; i < req.files.length; i++) {
                                        source = req.files[i].path
                                        destination = dir + req.files[i].filename
                                        await fsExtra.move(source, destination,)
                                        let csvVal = await csvtojsonV2().fromFile(destination);
            
                                        let tmp_val = {}
                                        tmp_val["csv"] = (destination.replace(/\\/g, '/')).replace(removeExtraPath, "");
            
                                        for (let j = 0; j < 5; j++) { // keep j= 5 if u want only 5 row
                                            tmp_val[j] = csvVal[j]
                                        }
            
                                        textAreaArray[csvPos[i]] = csvVal  //use tmp_val here in place of csvVal if u want only 5 row 
                                    }
            
                                    await Blogs.findByIdAndUpdate(req.params.id, { $set: { textAreaArray } }, { new: true })
            
                                    return res.status(200).send("CSV uploaded successfully")
                                }
                                func()
                            }
                        })
                    }
                    else {
                        return res.status(500).send("You are not authenticated")
                    }
                }
                if (err) {
                    return res.status(500).send(err.message)
                }
            })
        }
        else {
            return res.status(500).json({ err: "Not a valid id" })
        }

    }
    catch (error) {
        // console.error(error.message)
        return res.status(500).send("some error occured")
    }

})



module.exports = router