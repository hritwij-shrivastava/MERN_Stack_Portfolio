import React, { useState } from 'react';
import AssetContext from "./assetContext";


const AssetState = (props) => {
    // const host = "http://127.0.0.1:9000"
    // const webAddress = "http://127.0.0.1:9000/"
    // const host = "http://hritwij.com:9000"
    const host = "http://hritwij.com"
    const webAddress = "http://hritwij.com/"
    const tagTitle = {
        'h1': "Biggest Heading (h1)",
        'h2': "Bigger Heading (h2)",
        'h3': "Big Heading (h3)",
        'h4': "Small Heading (h4)",
        'h5': "Smaller Heading (h5)",
        'h6': "Smallest Heading (h6)",
        'img': "Image (img)",
        'p': "Paragraph (p)",
        'code': "code",
        'ul': "Unordered List (ul)",
        'ol': "Ordered List (ol)",
        'blockquote': "Quote (blockquote)",
        'table': "Table (table)",
        'iframe': "Iframe (iframe)",
        'csv': "Table (CSV)",
        'pptx': "PowerPoint (PPTX)",
        'pdf': "PDF File (PDF)",
    }

    const [blog, setblog] = useState("")
    const [userdata, setUserdata] = useState({})
    const [serverRes, setServerRes] = useState("")
    const [err, setErr] = useState(false)

    const [blogId, setBlogId] = useState(0)
    const [blogTitle, setBlogTitle] = useState("")
    const [tagArray, setTagArray] = useState({})
    const [textAreaArray, setTextAreaArray] = useState({})
    const [imgFilesArray, setImgFilesArray] = useState({ 0: null, 1: '' })
    const [csvFilesArray, setCsvFilesArray] = useState({ 1: '' })
    const [pptxFilesArray, setPptxFilesArray] = useState({ 1: '' })
    const [pdfFilesArray, setPdfFilesArray] = useState({ 1: '' })
    const [imgTmpUrl, setImgTmpUrl] = useState({ 1: '' })

    // Get Website assets
    const getData = async () => {
        const url = host + "/api/users/get";
        const response = await fetch(url);
        const res = await response.json()
        setUserdata(res)
        console.log(res.blog)
    }

    // Get All published blogs
    const getAllBlog = async (page,type,size) => {
        const url = host + "/api/blog/get?page=" + page + "&type=" + type + "&size=" + size;
        const response = await fetch(url);
        const blogs = await response.json()

        return blogs
        
    }



    // ====================== Blog Function Start ==============================================\\
    const getBlogPage = async (id) => {
        const url = host + "/api/blog/blogpage/" + id;
        const updateView = host + "/api/blog/updateview?id="+id+"&ip=";
        let ipFetchUrrl = 'https://api.ipify.org?format=json';
        let ip
        

        await fetch(ipFetchUrrl).then(res => res.json()).then(out => {ip = out.ip; fetch((updateView + ip))}).catch(err => alert('Error!', err.message));

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'get',
        });

        const data = await response.json()
        await setblog(data)
        return data        
    }

    // fetch all blog for particular user
    const getBlog = async () => {
        const url = host + "/api/blog/user";
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'token': localStorage.getItem('jwtToken')
            },
            method: 'get',
        });

        const data = await response.json()
        return data
    }

    const newBlog = async () => {
        const url = host + "/api/blog/new";
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('jwtToken')
            },
            method: 'post',
        });

        const data = await response.json()
        if (!data.err) {
            var id = data["last_blog"][0]._id
            
            
            setErr(false)
            return id
        }
        else {
            const res = await data.err
            setServerRes(res)
            setErr(true)
        }

    }

    const setBlogStatus = async (id, status) => {
        const url = host + "/api/blog/status/" + id;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('jwtToken')
            },
            method: 'post',
            body: JSON.stringify({ status })
        });

        const data = await response.json()
        if (!data.err) {
            const res = data
            setServerRes(res)
            setErr(false)
        }
        else {
            const res = await data.err
            setServerRes(res)
            setErr(true)
        }
    }

    const deleteBlog = async (id) => {
        const url = host + "/api/blog/delete/" + id;
        const response = await fetch(url, {
            headers: {
                'token': localStorage.getItem('jwtToken')
            },
            method: 'delete',
        });

        const data = await response.json()

        if (!data.err) {
            const res = data
            setServerRes(res)
            setErr(false)
        }
        else {
            const res = await data.err
            setServerRes(res)
            setErr(true)
        }
    }



    // -------------------- Blog Edit Function Start --------------------------------------------\\

    const getBlogData = async (id) => {
        const url = host + "/api/blog/edit/" + id;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'token': localStorage.getItem('jwtToken')
            },
            method: 'get',
        });

        const data = await response.json()
        return data
        // setTagArray(data.tagArray)
        // setTextAreaArray(data.textAreaArray)
    }

    const setBlogIdVal = async (val) => {
        await setBlogId(val)
        console.log("blogId", blogId)
    }

    const setBlogTitleVal = async (val) => {
        await setBlogTitle(val)
        console.log("blogtitle", blogTitle)
    }
    const setTagArrayVal = async (val) => {
        await setTagArray(val)
        console.log("tag", tagArray)
    }
    const setTextAreaArrayVal = async (val) => {
        await setTextAreaArray(val)
        console.log("text", textAreaArray)
    }
    const setImgFilesArrayVal = async (val) => {
        await setImgFilesArray(val)
        console.log("img", imgFilesArray)
    }
    const setCsvFilesArrayVal = async (val) => {
        await setCsvFilesArray(val)
        console.log("csv", csvFilesArray)
    }
    const setPptxFilesArrayVal = async (val) => {
        await setPptxFilesArray(val)
        console.log("ppt", pptxFilesArray)
    }
    const setPdfFilesArrayVal = async (val) => {
        await setPdfFilesArray(val)
        console.log("pdf", pdfFilesArray)
    }
    const setImgTmpUrlVal = async (val) => {
        await setImgTmpUrl(val)
        console.log("imgTmp", imgTmpUrl)
    }

    const sendBlogData = async (id, blogTitle, tagArray, textAreaArray, status,type) => {

        const url = host + "/api/blog/update/" + id;

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('jwtToken')
            },
            method: 'post',
            body: JSON.stringify({ blogTitle, tagArray, textAreaArray, status, type })
        });

        var sres = await response.text()

        setServerRes(sres);
    }

    const sendImgFiles = async (id, imgFilesArray) => {

        const url = host + "/api/blog/updateimg/" + id;
        const formdata = new FormData()
        var count = 0

        for (var key of Object.keys(imgFilesArray)) {
            if (imgFilesArray[key] !== '') {
                formdata.append('img', imgFilesArray[key])
                count = count + 1
            }
        }
        if ((imgFilesArray.length !== 0) && count !== 0) {
            const response = await fetch(url, {
                headers: {
                    'token': localStorage.getItem('jwtToken')
                },
                method: 'post',
                body: formdata,
            });

            var sres = await response.text()

            setServerRes(sres);
        }
    }

    const sendCsvFiles = async (id, csvFilesArray) => {

        const url = host + "/api/blog/updatecsv/" + id;
        const formdata = new FormData()
        var count = 0

        for (var key of Object.keys(csvFilesArray)) {
            if (csvFilesArray[key] !== '') {
                formdata.append('csv', csvFilesArray[key])
                count = count + 1
            }
        }
        if ((csvFilesArray.length !== 0) && count !== 0) {
            const response = await fetch(url, {
                headers: {
                    'token': localStorage.getItem('jwtToken')
                },
                method: 'post',
                body: formdata,
            });

            var sres = await response.text()

            setServerRes(sres);
        }
    }

    const sendPdfFiles = async (id, pdfFilesArray) => {

        const url = host + "/api/blog/updatepdf/" + id;
        const formdata = new FormData()
        var count = 0

        for (var key of Object.keys(pdfFilesArray)) {
            if (pdfFilesArray[key] !== '') {
                formdata.append('pdf', pdfFilesArray[key])
                count = count + 1
            }
        }
        if ((pdfFilesArray.length !== 0) && count !== 0) {
            const response = await fetch(url, {
                headers: {
                    'token': localStorage.getItem('jwtToken')
                },
                method: 'post',
                body: formdata,
            });


            var sres = await response.text()

            setServerRes(sres);
        }
    }

    const sendPptxFiles = async (id, pptxFilesArray) => {

        const url = host + "/api/blog/updatepptx/" + id;
        const formdata = new FormData()
        var count = 0

        for (var key of Object.keys(pptxFilesArray)) {
            if (pptxFilesArray[key] !== '') {
                formdata.append('pptx', pptxFilesArray[key])
                count = count + 1
            }
        }
        if ((pptxFilesArray.length !== 0) && count !== 0) {
            const response = await fetch(url, {
                headers: {
                    'token': localStorage.getItem('jwtToken')
                },
                method: 'post',
                body: formdata,
            });

            var sres = await response.text()

            setServerRes(sres);
        }
    }
    // -------------------- Blog Edit Function End -----------------------------------------------\\



    // ====================== Blog Function End ==============================================\\



    // -------------------- User Asset Function Start --------------------------------------------\\
    const sendProfile = async (imgFile) => {
        const url = host + "/api/users/frontpage";
        const img = imgFile
        const formdata = new FormData()

        formdata.append('img', img)

        if (!(img === null)) {
            const responseImg = await fetch(url, {
                headers: {
                    'token': localStorage.getItem('jwtToken')
                },
                method: 'post',
                body: formdata,
            });

            var sres = await responseImg.text()

            setServerRes(sres);
        }
    }

    const sendBG = async (imgFileArray) => {
        const url = host + "/api/users/bg";
        const img = imgFileArray
        const formdata = new FormData()

        for (var key of Object.keys(img)) {
            formdata.append('img', img[key])
        }

        if (!(img.length === 0)) {
            const responseImg = await fetch(url, {
                headers: {
                    'token': localStorage.getItem('jwtToken')
                },
                method: 'post',
                body: formdata,
            });

            var sres = await responseImg.text()

            setServerRes(sres);
        }
    }

    const sendSkills = async (imgFileArray) => {
        const url = host + "/api/users/skills";
        const img = imgFileArray
        const formdata = new FormData()

        for (var key of Object.keys(img)) {
            formdata.append('img', img[key])
        }

        if (!(img.length === 0)) {
            const responseImg = await fetch(url, {
                headers: {
                    'token': localStorage.getItem('jwtToken')
                },
                method: 'post',
                body: formdata,
            });

            var sres = await responseImg.text()

            setServerRes(sres);
        }
    }

    const sendServices = async (imgFileArray, title, desc) => {
        const url = host + "/api/users/services";
        const img = imgFileArray
        const formdata = new FormData()

        formdata.append(title)
        formdata.append(desc)

        for (var key of Object.keys(img)) {
            formdata.append('img', img[key])
        }

        if (!(img.length === 0)) {
            const responseImg = await fetch(url, {
                headers: {
                    'token': localStorage.getItem('jwtToken')
                },
                method: 'post',
                body: formdata,
            });

            var sres = await responseImg.text()

            setServerRes(sres);
        }
    }

    const sendCert = async (imgFileArray) => {
        const url = host + "/api/users/cert";
        const img = imgFileArray
        const formdata = new FormData()

        for (var key of Object.keys(img)) {
            formdata.append('img', img[key])
        }

        if (!(img.length === 0)) {
            const responseImg = await fetch(url, {
                headers: {
                    'token': localStorage.getItem('jwtToken')
                },
                method: 'post',
                body: formdata,
            });

            var sres = await responseImg.text()

            setServerRes(sres);
        }
    }

    const sendResume = async (resume) => {
        const url = host + "/api/users/resume";
        const formdata = new FormData()

        formdata.append('resume', resume)

        if (!(resume === null)) {
            const responseImg = await fetch(url, {
                headers: {
                    'token': localStorage.getItem('jwtToken')
                },
                method: 'post',
                body: formdata,
            });

            var sres = await responseImg.text()

            setServerRes(sres);
        }
    }

    const sendPortfolio = async (imgFileArray, title, blogId) => {
        const url = host + "/api/users/portfolio";
        const img = imgFileArray
        const formdata = new FormData()
        formdata.append("title", title)
        formdata.append("blogId", blogId)

        for (var key of Object.keys(img)) {
            formdata.append('img', img[key])
        }

        if (!(img.length === 0)) {
            const responseImg = await fetch(url, {
                headers: {
                    'token': localStorage.getItem('jwtToken')
                },
                method: 'post',
                body: formdata,
            });

            var sres = await responseImg.text()

            setServerRes(sres);
        }
    }

    // -------------------- User Asset Function End --------------------------------------------\\

    return (
        <AssetContext.Provider value={{
            webAddress,
            userdata,
            blog,
            serverRes,
            err,
            tagTitle,
            blogId,
            blogTitle,
            tagArray,
            textAreaArray,
            imgFilesArray,
            csvFilesArray,
            pptxFilesArray,
            pdfFilesArray,
            imgTmpUrl,
            getData,
            getAllBlog,
            getBlog,
            getBlogPage,
            newBlog,
            setBlogStatus,
            deleteBlog,
            sendProfile,
            sendBG,
            sendSkills,
            sendCert,
            sendServices,
            sendResume,
            sendPortfolio,

            setBlogIdVal,
            setBlogTitleVal,
            setTagArrayVal,
            setTextAreaArrayVal,
            setImgFilesArrayVal,
            setCsvFilesArrayVal,
            setPptxFilesArrayVal,
            setPdfFilesArrayVal,
            setImgTmpUrlVal,

            getBlogData,
            sendBlogData,
            sendImgFiles,
            sendCsvFiles,
            sendPdfFiles,
            sendPptxFiles

        }}>
            {props.children}
        </AssetContext.Provider>
    )
}

export default AssetState;