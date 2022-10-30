import React, { Component } from 'react'
import assetContext from '../../../Context/Home/assetContext'

export default class PptViewer extends Component {
    static contextType = assetContext
    render() {
        const img = this.props.img
        return (
            <>
            <div className='fun-facts-area' style={{background: "transparent"}}>
                <figure className="blog-banner video-area" style={{ border: "2px solid black" }}>
                    <img className="img-fluid" src={`${this.context.webAddress}${img[0]}`} alt="" />
                    <button className="video-play-btn"  onClick={() => { this.props.update(img) }}>
                        <i className="fa fa-play"></i>
                    </button>
                </figure>
            </div>
                
            </>
        )
    }
}
