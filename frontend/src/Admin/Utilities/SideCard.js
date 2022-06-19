import React, { Component } from 'react'

export default class SideCard extends Component {
    render() {
        return (
            <>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Image Preview</h6>
                    </div>
                    <div className="card-body">
                        <div className="chart-pie pt-4">
                            <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                    <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                    <div className=""></div>
                                </div>
                            </div>
                            <div style={{ display: "block", width: "301px", minHeight: "253px" }}>
                                <figure className="blog-banner" style={{position: "relative"}}>
                                    <img className="img-fluid" src={this.props.imgTmpUrl} alt="" />
                                </figure>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}
