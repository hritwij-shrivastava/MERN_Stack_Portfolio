import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import ParticlesBackground from './Config/Home/ParticlesBackground';
import assetContext from '../Context/Home/assetContext'

import '../static/css/slick.min.css'
import '../static/css/slick-theme.min.css'


export default function Home() {

    const context = useContext(assetContext);
    const {webAddress,userdata,getData} = context;

    useEffect(() => {
        if (Object.keys(userdata).length === 0) {
            getData()
        }
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className="App">
                <ParticlesBackground />
                <section className="home section-bg active" id="home">
                    <div className="d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="main-profile-image">
                                        <img src={`${webAddress}${userdata.frontPage}`} width="485px" height="665px" alt="hritwij shrivastava"/>
                                        {/* <img src={require('../static/asset/home/img1653983770787.jpg')} alt=""/> */}
                                    </div>
                                </div>
                                <div className="col-lg-6  align-self-center">
                                    <div className="hero-box text-left">
                                        <span className="greeting">HELLO</span>
                                        <h2 className="name">
                                            I'm <span>Hritwij Shrivastava</span>
                                        </h2>

                                        <h4 className="header_title"> I am a software developer</h4>
                                        <p className="short-info">
                                            With over 1+ years of job experience.
                                            I studied Electronics & instrumentation Engineering at Techno India and later honed my skills through commercial and
                                            freelance experience. My skills include Python, Statistics, Machine learning, Web Development, Cyber security and RPA.
                                        </p>
                                        <Link id="g-p-f-h" className="pagelink mybtn mybtn-bg" to="/about"><span><i className="fas fa-briefcase"></i>Know more about me</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
