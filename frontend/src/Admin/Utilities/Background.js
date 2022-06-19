import React, { Component } from 'react'
import assetContext from '../../Context/Home/assetContext'
import SideCard from './SideCard'

export default class Background extends Component {

    static contextType = assetContext
    state = {
        imgFileArray: {},
        imgTmpUrl: []
    }
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    onSubmit = async (e) => {
        e.preventDefault();
        await this.context.sendBG(this.state.imgFileArray);
        var notice = this.context.serverRes
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
            imgTmpUrl: []
        })
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Background</h6>
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
                                    <div id="myAreaChart" style={{ display: "block", width: "668px", height: "320px" }} >
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlFile1 mb-4">Upload Background Picture</label>
                                                <input type="file" multiple ref={this.ref} onChange={(e) => { this.onImgFileUpload(e) }} className="form-control-file dropzone dz-clickable mb-4" id="exampleFormControlFile1" />
                                            </div>
                                            <button type="submit" className="btn btn-success" onClick={(e) => { this.onSubmit(e) }}>Submit</button>
                                            <button className="btn btn-danger" onClick={(e) => { this.onRemove(e) }} style={{ marginLeft: "20px" }}>Remove</button>
                                        </form>
                                    </div>
                                </div>
                                <hr />Upload Profile Picture (maximum 5 Pictures are allowed at a time)
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-4 col-lg-5">
                        {this.state.imgTmpUrl.map((element, index) => {
                            return (
                                <SideCard imgTmpUrl={element} key={index}/>
                            )
                        })}

                    </div>
                </div>

            </>
        )
    }
}
