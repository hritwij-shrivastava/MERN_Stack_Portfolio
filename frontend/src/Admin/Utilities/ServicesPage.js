import React, { Component } from 'react'
import assetContext from '../../Context/Home/assetContext'
import SideCard from './SideCard'

export default class ServicesPage extends Component {
    static contextType = assetContext
    state = {
        title: "",
        desc: "",
        imgFileArray: {},
        certFilesArray: {},
        imgTmpUrl: [],
        resume: null
    }
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.ref2 = React.createRef();
    }
    onSubmit = async (e) => {
        e.preventDefault();
        var notice = ""

        // await this.context.sendServices(this.state.imgFileArray,this.state.title,this.state.desc);
        // notice = await this.context.serverRes
        // alert(notice)

        await this.context.sendCert(this.state.certFilesArray);
        notice = await this.context.serverRes
        alert(notice)

        await this.context.sendResume(this.state.resume);
        notice = await this.context.serverRes
        alert(notice)
    }
    createTmpUrl = (file) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                var tmp = this.state.imgTmpUrl
                tmp.push(reader.result)
                this.setState({
                    imgTmpUrl: tmp

                })
            }
        }
        reader.readAsDataURL(file)
    }
    onImgFileUpload = (e) => {
       
        this.setState({
            imgFileArray: e.target.files
        })
    }
    onCertFileUpload = (e) => {
        for (var i = 0; i < e.target.files.length; i++) {
            this.createTmpUrl(e.target.files[i])
        }
        
        this.setState({
            certFilesArray: e.target.files
        })
    }
    onPdfFileUpload = (e) => {
        this.setState({
            resume: e.target.files[0]
        })
    }
    onRemove = (e) => {
        e.preventDefault();
        this.ref.current.value = "";
        this.ref2.current.value = "";
        this.setState({
            title: "",
            desc: "",
            imgFileArray: {},
            certFilesArray: {},
            resume: null
        })
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Services Page</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-area">
                                    <div className="chartjs-size-monitor">
                                        <div className="chartjs-size-monitor-expand">
                                            <div className=""></div>
                                        </div>
                                        <div className="chartjs-size-monitor-shrink">
                                            <div className=""></div>
                                        </div>
                                    </div>
                                    <div id="myAreaChart" style={{ display: "block", width: "668px", minHeight: "320px" }} >
                                        <form>
                                            <div className="form-group">
                                                {/* <label htmlFor="exampleFormControlFile1 mb-4">Upload Service Pictures</label>
                                                <input multiple type="file" onChange={(e) => { this.onImgFileUpload(e) }} className="form-control-file dropzone dz-clickable mb-4" id="exampleFormControlFile1" />
                                                
                                                <label htmlFor="exampleFormControlTextarea1">Service Title (Comma separated)</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                
                                                <label htmlFor="exampleFormControlTextarea1">Service Description</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}

                                                <label htmlFor="exampleFormControlFile1 mb-4">Upload Certificate Pictures</label>
                                                <input multiple type="file" accept="image/*" ref={this.ref} onChange={(e) => { this.onCertFileUpload(e) }} className="form-control-file dropzone dz-clickable mb-4" id="exampleFormControlFile1" />

                                                <label htmlFor="exampleFormControlFile1 mb-4">Upload Resume</label>
                                                <input type="file" accept=".pdf" ref={this.ref2} onChange={(e) => { this.onPdfFileUpload(e) }} className="form-control-file dropzone dz-clickable mb-4" id="exampleFormControlFile1" />
                                            </div>
                                            <button className="btn btn-success" onClick={(e) => { this.onSubmit(e) }}>Submit</button>
                                            <button className="btn btn-danger" style={{ marginLeft: "20px" }} onClick={(e) => { this.onRemove(e) }}>Remove</button>
                                        </form>
                                    </div>
                                </div>
                                <hr />Upload Profile Picture
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        {this.state.imgTmpUrl.map((element, index) => {
                            return (
                                <SideCard imgTmpUrl={element} key={index} />
                            )
                        })}
                    </div>
                </div>

            </>
        )
    }
}

