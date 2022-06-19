import React, { Component } from 'react'
import assetContext from '../../Context/Home/assetContext'
import SideCard from './SideCard'

export default class ProfilePage extends Component {

    static contextType = assetContext
    state = {
        imgFile: null,
        imgTmpUrl: ""
    }
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    onSubmit = async(e) => {
        e.preventDefault();
        await this.context.sendProfile(this.state.imgFile);
        var notice = this.context.serverRes
        alert(notice)
    }
    createTmpUrl = (e)=>{
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({
                    imgTmpUrl: reader.result
                    
                })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    onImgFileUpload = (e) => {
        this.createTmpUrl(e)
        this.setState({
            imgFile: e.target.files[0]
        })
    }
    onRemove = (e) => {
        e.preventDefault();
        this.ref.current.value = "";
        this.setState({
            imgFile: null,
            imgTmpUrl: ""
        })
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Profile</h6>
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
                                                <label htmlFor="exampleFormControlFile1 mb-4">Upload Profile Picture</label>
                                                <input type="file" ref={this.ref} onChange={(e) => { this.onImgFileUpload(e) }} className="form-control-file dropzone dz-clickable mb-4" id="exampleFormControlFile1" />
                                            </div>
                                            <button type="submit" className="btn btn-success" onClick={(e) => { this.onSubmit(e) }}>Submit</button>
                                            <button className="btn btn-danger" onClick={(e) => { this.onRemove(e) }} style={{ marginLeft: "20px" }}>Remove</button>
                                        </form>
                                    </div>
                                </div>
                                <hr />Upload Profile Picture (only 1 Picture is allowed at a time)
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <SideCard imgTmpUrl ={this.state.imgTmpUrl}/>
                    </div>
                </div>

            </>
        )
    }
}
