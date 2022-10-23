const path = require('path');

const dotenv = require('dotenv').config();

const axios = require('axios');

const fsExtra = require('fs-extra');
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");
// const keys = require("../keys");

const express = require("express");
const router = express.Router()

const Users = require('../mongoose/models/users')
const Blogs = require('../mongoose/models/blogs')
const upload = require('../middleware/upload')
const validateLoginInput = require("../middleware/validation/login");
const validateRegisterInput = require("../middleware/validation/register");

const storageLoc = path.join( "..","backend","src","frontend","public","static","asset","/" )
const removeExtraPath = '../backend/src/frontend'

// Router fetch all website asset for public
router.get('/get', async (req, res) => {
    try {
        const user = await Users.findOne({ email: "hritwij@hritwij.com" })
        const blog = await Blogs.find({ status: 1 }).sort({ _id: -1 }).limit(3);

        var data = {}
        var blogData = {}

        for (var index of Object.keys(blog)) {
            blogData[index] = {}
            blogData[index]["url"] = blog[index]["url"]
            blogData[index]["blogTitle"] = blog[index]["blogTitle"]
            blogData[index]["tagArray"] = blog[index]["tagArray"]
            blogData[index]["textAreaArray"] = blog[index]["textAreaArray"]
            blogData[index]["date"] = blog[index]["date"]

        }

        data["frontPage"] = user.frontPage
        data["skills"] = user.skills
        data["bg"] = user.bg
        data["certificate"] = user.certificate
        data["portfolio"] = user.portfolio
        data["resume"] = user.resume
        data["blog"] = blogData

        return res.status(200).json(data)

    }
    catch (error) {
        return res.status(500).send(error.message)
    }
})

// Router to Register
router.post("/register", (req, res) => {
    try {
        var token = req.query.token
        var SECRET_KEY = process.env.SECRET_KEY_FOR_REGISTRATION

        bcrypt.compare(token, SECRET_KEY).then(isMatch => {
            if (isMatch) {
                // Form validation
                const { errors, isValid } = validateRegisterInput(req.body);
                // Check validation
                if (!isValid) {
                    return res.status(400).json(errors);
                }
                Users.findOne({ email: req.body.email }).then(user => {
                    if (user) {
                        return res.status(400).json({ error: "Email already exists" });
                    }
                    else {
                        const newUser = new Users({
                            name: req.body.name,
                            email: req.body.email,
                            password: req.body.password,
                            mobile: req.body.mobile,
                            frontPage: "",
                            skills: "",
                            services: "",
                            certificate: ""
                        });
                        // Hash password before saving in database
                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(newUser.password, salt, (err, hash) => {
                                if (err) throw err;
                                newUser.password = hash;
                                newUser.save().then(user => res.status(200).json(user)).catch(err => res.status(500).json({ error: err }));
                            });
                        });

                    }
                });

            }
            else {
                return res.status(500).json({ error: "Why are you hacking my application? Go Away!" });
            }
        });

    }
    catch (error) {
        // console.error(error.message)
        return res.status(500).json({ error: "some error occured" });
    }
});

// Router to Login 
router.post("/login", async (req, res) => {
    try {
        // Form validation
        const { errors, isValid } = validateLoginInput(req.body);
        // Check validation
        if (!isValid) {
            return res.status(400).json({ error: (errors.email + " " + errors.password) });
        }
        const email = req.body.email;
        const password = req.body.password;
        const captcha = req.body.captcha
        const ip = req.body.ip
        // const SECRET_KEY = "Your Google Key"
        const SECRET_KEY = process.env.SECRET_KEY_FOR_GOOGLE
        let response

        await axios({
            url: process.env.GOOGLE_API_URL,
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: `secret=${SECRET_KEY}&response=${captcha}&remoteip=${ip}`,
        }).then((google_response) => { response = google_response.data.success })


        // Find user by email
        if (response) {
            Users.findOne({ email }).then(user => {
                // Check if user exists
                if (!user) {
                    return res.status(404).json({ error: "Email not found" });
                }
                // Check password
                bcrypt.compare(password, user.password).then(isMatch => {
                    if (isMatch) {
                        // User matched
                        // Create JWT Payload
                        const payload = {
                            id: user.id,
                            name: user.name
                        };
                        // Sign token
                        jwt.sign(
                            payload,
                            process.env.SECRET_OR_KEY,
                            {
                                algorithm: "HS256",
                                expiresIn: 3600 // 60 mints in seconds
                            },
                            (err, token) => {
                                return res.json({ success: true, token: "Bearer " + token });
                            }
                        );
                    } else {
                        return res.status(400).json({ error: "Password incorrect" });
                    }
                });
            });
        }
        else {
            return res.status(400).json({ error: response });
        }
    }
    catch (error) {
        // console.error(error.message)
        return res.status(500).json({ error: "some error occured" });
    }
});

// Router to Upload Image for home page
router.post('/frontpage', async (req, res) => {

    try {
        var token = (req.headers.token).replace("Bearer ", "")
        jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
            if (!err) {
                const _id = decoded.id
                const user = await Users.findOne({ _id })
                if (user) {
                    const uploadImage = upload.single('img');

                    uploadImage(req, res, function (err) {
                        if (err) {
                            return res.status(400).send("Maximum 5 Pictures are allowed at a time")
                        }
                        else { 
                            const func = async()=>{
                                let dir = path.join( storageLoc , "home" , "/" )
                                fsExtra.rmSync(dir, { recursive: true, force: true });
                                let source = req.file.path
                                let destination = dir + req.file.filename

                                fsExtra.move(source, destination,)

                                let frontPage = (destination.replace(/\\/g, '/')).replace(removeExtraPath, "");

                                await Users.findByIdAndUpdate(_id, { $set: { frontPage } }, { new: true })
                                return res.status(200).send("Images uploaded successfully")
                            }
                        
                            func()
                        }
                    })
                }
                else {
                    res.status(400).send("You are not authenticated")
                }
            }
            if (err) {
                res.status(500).send(err.message)
            }
        })

    }
    catch (error) {
        res.status(500).send("some error occured")
    }






})

// Router to Upload Image for skills
router.post('/bg', async (req, res) => {

    try {
        var token = (req.headers.token).replace("Bearer ", "")
        jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
            if (!err) {
                const _id = decoded.id
                const user = await Users.findOne({ _id })
                if (user) {
                    const uploadImage = upload.array('img', 5);

                    uploadImage(req, res, function (err) {
                        if (err) {
                            return res.status(400).send("Maximum 5 Pictures are allowed at a time")
                        }
                        else{
                            const func = async()=>{
                                var tmpbg = {}
                                let dir = path.join( storageLoc , "bg" , "/" ) 
                                fsExtra.rmSync(dir, { recursive: true, force: true });
            
                                for (let i = 0; i < req.files.length; i++) {
                                    let source = req.files[i].path
                                    let destination = dir + req.files[i].filename
                                    fsExtra.move(source, destination,)
            
                                    tmpbg[i] = (destination.replace(/\\/g, '/')).replace(removeExtraPath, "");
                                }
                                bg = tmpbg
            
                                await Users.findByIdAndUpdate(_id, { $set: { bg } }, { new: true })
            
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
    catch (error) {
        console.error(error.message)
        return res.status(500).send("some error occured")
    }




})

// Router to Upload Image for skills
router.post('/skills', async (req, res) => {

    try {
        var token = (req.headers.token).replace("Bearer ", "")
        jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
            if (!err) {
                const _id = decoded.id
                const user = await Users.findOne({ _id })
                if (user) {
                    const uploadImage = upload.array('img', 50);

                    uploadImage(req, res, function (err) {
                        if (err) {
                            return res.status(400).send("Maximum 5 Pictures are allowed at a time")
                        }
                        else{
                            const func = async()=>{
                                var skills = user.skills
                                var tmpSkill = {}
                                let dir = path.join( storageLoc , "skills" , "/" )
            
                                for (let i = 0; i < req.files.length; i++) {
                                    let source = req.files[i].path
                                    let destination = dir + req.files[i].filename
                                    fsExtra.move(source, destination,)
            
                                    tmpSkill[i] = (destination.replace(/\\/g, '/')).replace(removeExtraPath, "");
                                }
                                skills = tmpSkill
            
                                await Users.findByIdAndUpdate(_id, { $set: { skills } }, { new: true })
            
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
    catch (error) {
        return res.status(500).send("some error occured")
    }


})

// Router to Upload Image for certificate
router.post('/cert', async (req, res) => {

    try {
        var token = (req.headers.token).replace("Bearer ", "")
        jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
            if (!err) {
                const _id = decoded.id
                const user = await Users.findOne({ _id })
                if (user) {
                    const uploadImage = upload.array('img', 50);

                    uploadImage(req, res, function (err) {
                        if (err) {
                            return res.status(400).send("Maximum 50 Pictures are allowed at a time")
                        }
                        else{
                            const func = async()=>{
                                var certificate = user.certificate
                                var tmp_certificate = {}
                                let dir = path.join(storageLoc , "cert", "/" )
                                fsExtra.rmSync(dir, { recursive: true, force: true });
            
                                for (let i = 0; i < req.files.length; i++) {
                                    let source = req.files[i].path
                                    let destination = dir + req.files[i].filename
                                    fsExtra.move(source, destination,)
            
                                    tmp_certificate[i] = (destination.replace(/\\/g, '/')).replace(removeExtraPath, "");
                                }
                                certificate = tmp_certificate
            
                                await Users.findByIdAndUpdate(_id, { $set: { certificate } }, { new: true })
            
                                return res.status(200).send("Certificates uploaded successfully")
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
    catch (error) {
        return res.status(500).send("some error occured")
    }




})

// Router to Upload Image for certificate
router.post('/resume', async (req, res) => {

    try {
        var token = (req.headers.token).replace("Bearer ", "")
        jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
            if (!err) {
                const _id = decoded.id
                const user = await Users.findOne({ _id })
                if (user) {
                    const uploadImage = upload.single('resume');

                    uploadImage(req, res, function (err) {
                        if (err) {
                            return res.status(400).send("You can upload only 1 resume at a time")
                        }
                        else{
                            const func = async()=>{
                                var resume = user.resume
                                let dir = path.join(storageLoc , "resume" , "/" )
                                fsExtra.rmSync(dir, { recursive: true, force: true });
            
                                let source = req.file.path
                                let destination = dir + req.file.filename
                                fsExtra.move(source, destination,)
            
                                resume = (destination.replace(/\\/g, '/')).replace(removeExtraPath, "");
            
                                await Users.findByIdAndUpdate(_id, { $set: { resume } }, { new: true })
            
                                return res.status(200).send("Resume uploaded successfully")
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
    catch (error) {
        return res.status(500).send("some error occured")
    }



})

// Router to Update services
// router.post('/services', async (req, res) => {

//     try {
//         var token = (req.headers.token).replace("Bearer ", "")
//         var name = req.body.name
//         var detail = req.body.detail
//         jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
//             if (!err) {
//                 const _id = decoded.id
//                 const user = await Users.findOne({ _id })
//                 if (user) {
//                     const uploadImage = upload.array('img', 15);

//                     await uploadImage(req, res, function (err) {
//                         if (err) {
//                             return res.status(400).send("Maximum 5 Pictures are allowed at a time")
//                         }

//                     })
//                     var services = user.services
//                     var tmp_services = {}
//                     var tmp_obj = {}
//                     let dir = "..\\frontend\\src\\static\\asset\\services\\"

//                     for (let i = 0; i < req.files.length; i++) {
//                         let source = req.files[i].path
//                         let destination = dir + req.files[i].filename
//                         fsExtra.move(source, destination,)

//                         tmp_obj[0] = (destination.replace(/\\/g, '/')).replace(removeExtraPath, "");
//                         tmp_obj[1] = name
//                         tmp_obj[2] = detail
//                         tmp_services[i] = tmp_obj

//                     }
//                     services = tmp_services

//                     await Users.findByIdAndUpdate(_id, { $set: { services } }, { new: true })

//                     res.status(200).send("Services updated successfully")
//                 }
//                 else {
//                     res.status(500).send("You are not authenticated")
//                 }
//             }
//             if (err) {
//                 res.status(500).send(err.message)
//             }
//         })

//     }
//     catch (error) {
//         console.error(error.message)
//         res.status(500).send("some error occured")
//     }

// })


// Router to Update portfolio
// router.post('/portfolio', async (req, res) => {

//     try {
//         var token = (req.headers.token).replace("Bearer ", "")
//         var title = req.body.title
//         var blogId = req.body.blogId
//         var titleArray = title.split(",");
//         var blogIdArray = blogId.split(",");
//         jwt.verify(token, process.env.SECRET_OR_KEY, async (err, decoded) => {
//             if (!err) {
//                 const _id = decoded.id
//                 const user = await Users.findOne({ _id })
//                 if (user) {
//                     const uploadImage = upload.array('img', 50);

//                     await uploadImage(req, res, function (err) {
//                         if (err) {
//                             return res.status(400).send("Maximum 5 Pictures are allowed at a time")
//                         }
//                     })
//                     var portfolio = user.portfolio
//                     var tmp_portfolio = {}


//                     if ((req.files.length === titleArray.length) && (req.files.length === blogIdArray.length)) {
//                         let dir = path.join(storageLoc , "portfolio", "/" )
//                         fsExtra.rmSync(dir, { recursive: true, force: true });

//                         for (let i = 0; i < req.files.length; i++) {
//                             var blog = await Blogs.findOne({ _id: blogIdArray[i] })
//                             var blogUrl = blog.url
//                             var tmp_obj = {}
//                             let source = req.files[i].path
//                             let destination = dir + req.files[i].filename
//                             fsExtra.move(source, destination,)

//                             tmp_obj[0] = (destination.replace(/\\/g, '/')).replace(removeExtraPath, "");
//                             tmp_obj[1] = titleArray[i]
//                             tmp_obj[2] = blogUrl
//                             tmp_portfolio[i] = tmp_obj

//                         }
//                         portfolio = tmp_portfolio

//                         await Users.findByIdAndUpdate(_id, { $set: { portfolio } }, { new: true })

//                         return res.status(200).send("Portfolio updated successfully")
//                     }
//                     else {
//                         return res.status(400).send("Please enter title and blog id in correct format")
//                     }


//                 }
//                 else {
//                     return res.status(500).send("You are not authenticated")
//                 }
//             }
//             if (err) {
//                 res.status(500).send(err.message)
//             }
//         })

//     }
//     catch (error) {
//         console.error(error.message)
//         res.status(500).send("some error occured")
//     }

// })


// // Router to create hash password
// router.get("/hash", (req, res) => {
//     var password = req.body.password
//     var hashValue = ""

//     // Hash password before saving in database
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(password, salt, (err, hash) => {
//             if (err) throw err;
//             hashValue = hash;
//             console.log(hash);
//             res.status(200).json(hash)
//         });
//     });
// })
// // Router to create hash password verify
// router.get("/hashmatch", async (req, res) => {
//     var password = req.body.password
//     var hashValue = req.body.hash

//     bcrypt.compare(password, hashValue).then(isMatch => {
//         if (isMatch) {
//             // User matched
//             return res.status(200).json({ status: "Password  matched" });

//         } else {
//             return res.status(400).json({ error: "Password not matched" });
//         }
//     });
// })

module.exports = router