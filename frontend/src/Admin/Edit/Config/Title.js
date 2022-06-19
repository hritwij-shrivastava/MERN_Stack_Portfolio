import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import assetContext from '../../../Context/Home/assetContext'
import eye from '../../../static/img/eye.png'
import plane from '../../../static/img/plane2.png'

export default class Title extends Component {
    static contextType = assetContext
    state = {
        labelClass: "col-1 titleLabelBar",
        placeShow: true,        //Variable to check whether to show or not Title Pop up
    }

    onChange = async (e) => {
        const val = e.target.value;
        if (val != null) {
            await this.context.setBlogTitleVal(val)
            this.setState({
                labelClass: "col-1 titleLabelBar titleLabelBarUp",
                placeShow: false,
            })
        }
        if (val === null || val === "") {
            await this.context.setBlogTitleVal("")
            this.setState({
                labelClass: "col-1 titleLabelBar",
                placeShow: true,
            })
        }


    }

    uploadBlog = async (id,status,type) => {
        
        var blogTitle = this.context.blogTitle
        var tagArray = this.context.tagArray
        var textAreaArray = this.context.textAreaArray
        var imgFilesArray = this.context.imgFilesArray
        var csvFilesArray = this.context.csvFilesArray
        var pptxFilesArray = this.context.pptxFilesArray
        var pdfFilesArray = this.context.pdfFilesArray

        await this.context.sendBlogData(id, blogTitle, tagArray, textAreaArray, status, type)
        var notice1 = await this.context.serverRes

        await this.context.sendImgFiles(id, imgFilesArray)
        var notice2 = await this.context.serverRes

        await this.context.sendCsvFiles(id, csvFilesArray)
        var notice3 = await this.context.serverRes

        await this.context.sendPdfFiles(id, pdfFilesArray)
        var notice4 = await this.context.serverRes

        await this.context.sendPptxFiles(id, pptxFilesArray)
        var notice5 = await this.context.serverRes

        var finalNotice = notice1 + "\n" + notice2 + "\n" + notice3 + "\n" + notice4 + "\n" + notice5
        return (finalNotice)
    }

    handlePreview = async (value) => {
        const queryString = window.location.href
        let id = queryString.split("edit/")[1]

        var upload = ''
        var status = 0

        if (value === "save") {

            this.props.spinnerControl(true)

            upload = await this.uploadBlog(id,status,1)

            this.props.spinnerControl(false)

            alert(upload)

            return false;
        }

        else {
            upload = await this.uploadBlog(id,status,1)

            const url = "/preview/" + id
            window.open(url, '_blank')
        }
    }

    handlePublish = async (value) => {
        let type
        if(value === "blog"){
            type = 1
        }
        if(value === "portfolio"){
            type = 2
        }
        const queryString = window.location.href
        let id = queryString.split("edit/")[1]
        var upload = ''
        var status = 1
        this.props.spinnerControl(true)

        upload = await this.uploadBlog(id,status,type)

        this.props.spinnerControl(false)

        alert(upload)
        return false;


    }

    render() {
        return (
            <>
                {/* Heading Label Start */}
                <div className="row" >
                    <label className={this.state.labelClass}>Title</label>
                </div>
                {/* Heading Label End */}

                {/* Title Area Start */}
                <div className="row">
                    <div className="col-8">
                        <input type="text" className='mainTitleBar' onChange={(e) => { this.onChange(e) }} value={(this.context.blogTitle === "") ? "Tiitle" : this.context.blogTitle} />
                    </div>
                    <div className="col-2">
                        <Dropdown onSelect={(e) => { this.handlePreview(e) }}>
                            <Dropdown.Toggle className="dropdown-Preview">
                                <div className="row">
                                    <div className="col-8 previwArea">
                                        <img src={eye} alt="" srcSet="" style={{ marginRight: "10px", width: "20px" }} />
                                        <span>Preview&nbsp;&nbsp;</span>
                                    </div>
                                    <div className="col-4">
                                        <div className="droparrowL">
                                            <div className="arrow-downD"></div>
                                        </div>
                                    </div>
                                </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="prev">Preview Post</Dropdown.Item>
                                <Dropdown.Item eventKey="save">Save as draft</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="col-2">
                        <Dropdown onSelect={(e) => { this.handlePublish(e) }}>
                            <Dropdown.Toggle className="dropdown-Preview btn btn-success">
                                <div className="row">
                                    <div className="col-8 previwArea">
                                        <img src={plane} alt="" srcSet="" style={{ marginRight: "10px", width: "25px" }} />
                                        <span>Publish&nbsp;&nbsp;</span>
                                    </div>
                                    <div className="col-4">
                                        <div className="droparrowL">
                                            <div className="arrow-downD"></div>
                                        </div>
                                    </div>
                                </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="blog">Publish As Blog</Dropdown.Item>
                                <Dropdown.Item eventKey="portfolio">Publish As Portfolio</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    {/* <div className="col-2 publishar">
                        <button className="btn btn-success" onClick={(e) => { this.handlePublish(e) }}>
                            <img src={plane} alt="" srcSet="" style={{ marginRight: "10px", width: "25px" }} />
                            Publish
                        </button>
                    </div> */}

                </div>
                {/* Title Area End */}
            </>
        )
    }
}
