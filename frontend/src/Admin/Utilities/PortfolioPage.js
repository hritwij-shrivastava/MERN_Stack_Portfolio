import React, { Component } from 'react'
import assetContext from '../../Context/Home/assetContext'
import SideCard from './SideCard'

export default class PortfolioPage extends Component {
    static contextType = assetContext
    state = {
        imgFileArray: {},
        title: "",
        blogId: "",
        imgTmpUrl: [],
    }
    constructor(props) {
        super(props);
        this.ref = React.createRef();
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
    onSubmit = async (e) => {
        e.preventDefault();
        // console.log(this.state.imgFileArray, this.state.title, this.state.blogId)
        await this.context.sendPortfolio(this.state.imgFileArray, this.state.title, this.state.blogId);
        var notice = this.context.serverRes
        alert(notice)
    }
    onImgFileUpload = (e) => {
        for (var i = 0; i < e.target.files.length; i++) {
            this.createTmpUrl(e.target.files[i])
        }
        this.setState({
            imgFileArray: e.target.files
        })
    }
    onRemove = (e) => {
        e.preventDefault();
        this.ref.current.value = "";
        this.setState({
            imgFileArray: {},
            imgTmpUrl: [],
        })
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Portfolio Page</h6>
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
                                                <label htmlFor="exampleFormControlFile1 mb-4">Upload Cover Picture</label>
                                                <input multiple type="file" ref={this.ref} onChange={(e) => { this.onImgFileUpload(e) }} className="form-control-file dropzone dz-clickable mb-4" id="exampleFormControlFile1" />

                                                <label htmlFor="smallTitle">Small Title(3 Words Comma Separated)</label>
                                                <textarea onChange={(e) => { this.setState({ title: e.target.value }) }} className="form-control" id="smallTitle" rows="3"></textarea>

                                                <label htmlFor="blogID">Blog ID (Comma Separated)</label>
                                                <textarea onChange={(e) => { this.setState({ blogId: e.target.value }) }} className="form-control" id="blogID" rows="3"></textarea>

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
