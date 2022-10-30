import React, { Component } from 'react'
import {Helmet} from "react-helmet";

import ModalVideo from 'react-modal-video'

import AboutMe from './Config/About/AboutMeSection'
import AboutEduSection from './Config/About/AboutEduSection'
import SmallSkill from './Config/About/SmallSkill'
import assetContext from '../Context/Home/assetContext'

export class About extends Component {

    static contextType = assetContext

    componentDidMount=async()=>{
        
        if(Object.keys(this.context.userdata).length===0){
            await this.context.getData()
        }
        
    } // eslint-disable-line react-hooks/exhaustive-deps
    
    
    state = {
        photoIndex: 0,
        isOpen: false,
    }
    onClick = ()=>{
        this.setState({
            isOpen: true,
        })
    }
    
    render() {
        return (
            <>
                <Helmet>
                    <link rel="canonical" href="https://hritwij.com/about/" />
                </Helmet>
            
                <div className="firstcontainer">
                    {/* <ModalVideo channel='youtube' autoplay isOpen={this.state.isOpen} videoId="WnfuIAJJ4G0" onClose={() => this.setState({ isOpen: false })} /> */}
                    <ModalVideo channel='custom' url="/intro.mp4" isOpen={this.state.isOpen} onClose={() => this.setState({ isOpen: false })} />
                    <AboutMe />
                    <AboutEduSection />
                    <section className="fun-facts-area text-lg-left">
                        <div className="contaienr-fluid px-0">
                            <div className="row align-items-center no-gutters">
                                <div className="col-xl-6">
                                    <div className="video-area">
                                        <img src="/hrlaptop.jpg" alt="fun-facts-video-thumbnail" />
                                        <button  className="video-play-btn" onClick={this.onClick}>
                                            <i className="fa fa-play"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-xl-5">
                                    <div className="fun-fact-info">
                                        <div className="section-title margin-bottom-30">
                                            <h3 className="sub-title">Fun Facts</h3>
                                            <h2 className="title text-white">Please have a look at small intro about myself</h2>
                                        </div>
                                        <div className="fun-fact-content margin-bottom-55">
                                            <blockquote className="blockquote" style={{padding: 0}}>
                                                <p className="mb-2">“The future belongs to those who learn more skills and combine them in creative ways.”</p>
                                                <div className="blockquote-footer mt-0">Robert Greene, Mastery</div>
                                            </blockquote>
                                        </div>
                                        <div className="feature-area">
                                            <div className="row justify-content-center justify-content-lg-start">
                                                <div className="col-sm-5">
                                                    <div className="single-feature">
                                                        <div className="feature-left">
                                                            <h2>40<sub>+</sub></h2>
                                                        </div>
                                                        <h4 className="feature-title">Projects Done</h4>
                                                    </div>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="single-feature">
                                                        <div className="feature-left ml-xl-12">
                                                            <h2>20<sub>+</sub></h2>
                                                        </div>
                                                        <h4 className="feature-title">Happy Clients</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='smallColordsgn' style={{ width: "100%" }}>
                        <SmallSkill />
                    </div>
                </div>
            </>
        )
    }
}

export default About