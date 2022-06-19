import React, { Component } from 'react'
import {Link} from "react-router-dom";
import assetContext from '../../../Context/Home/assetContext'

export default class AboutMeSection extends Component {

    static contextType = assetContext

    state = {
        showAbout: true,
        showSkill: false,
        showContact: false,
    }

    onAbout = () => {
        this.setState({
            showAbout: true,
            showSkill: false,
            showContact: false
        })
    }
    onSkill = () => {
        this.setState({
            showAbout: false,
            showSkill: true,
            showContact: false
        })
    }
    onContact = () => {
        this.setState({
            showAbout: false,
            showSkill: false,
            showContact: true
        })
    }
    render() {
        return (
            <>
                <section className="about-me section" id="about-me">
                    <div className="container">
                        <div className="inner wow fadeInUp" data-wow-delay=".4s" style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp" }}>
                            <div className="row">
                                <div className="col-lg-6 col-12 aboutjpg">
                                    <div className="about-left">
                                        <a href="/me.png" target="_blank" rel="noopener noreferrer">
                                            <img src="/me.png" alt="#" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="about-right">
                                        <h3 className="right-title">About Me <span>A small introducton of myself.</span></h3>
                                        <div className="about-tab">
                                            {/* Nav Tab  */}
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item"><button className={this.state.showAbout?"nav-link active":"nav-link"} data-toggle="tab" onClick={this.onAbout} role="tab">About Me</button></li>
                                                <li className="nav-item"><button className={this.state.showSkill?"nav-link active":"nav-link"}  data-toggle="tab" onClick={this.onSkill} role="tab">My Skills</button></li>
                                                <li className="nav-item"><button className={this.state.showContact?"nav-link active":"nav-link"}  data-toggle="tab" onClick={this.onContact} role="tab">Contact Details</button></li>
                                            </ul>
                                            {/* <!--/ End Nav Tab */}
                                            <div className="tab-content" id="myTabContent">

                                                {/* ---- Tab 1 ---- */}
                                                {this.state.showAbout ?
                                                    <div className="tab-pane fade show active" id="t-tab1" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="tab-about">
                                                                    <p>I'm an experienced software engineer. In my two years in this industry, I've sharpened my analytical thinking and collaboration skills.</p>
                                                                    <div className="about-me-info">
                                                                        <div className="row">
                                                                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                                                                <ul className="info-inner">
                                                                                    <li><span>Name: </span>Hritwij Shrivastava</li>
                                                                                    <li><span>Email: </span>hritwij01shrivastava@gmail.com</li>
                                                                                    <li><span>Address: </span> Kolkata, India</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                                                                <ul className="info-inner">
                                                                                    <li><span>Age: </span>24</li>
                                                                                    <li><span>Phone: </span>+91 8051319411</li>
                                                                                    <li><span>Nationality: </span>Indian</li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="button">
                                                                        <a href={`${this.context.webAddress}${this.context.userdata.resume}`} target="_blank" rel="noreferrer" className="btn">Download CV
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                                                                <g data-name="Layer 2" fill="#ffffff" className="color000 svgShape">
                                                                                    <g data-name="download" fill="#ffffff" className="color000 svgShape">
                                                                                        <rect width="24" height="24" opacity="0" fill="#ffffff" className="color000 svgShape"></rect>
                                                                                        <rect width="16" height="2" x="4" y="18" rx="1" ry="1" fill="#ffffff" className="color000 svgShape"></rect>
                                                                                        <rect width="4" height="2" x="3" y="17" rx="1" ry="1" transform="rotate(-90 5 18)" fill="#ffffff" className="color000 svgShape"></rect>
                                                                                        <rect width="4" height="2" x="17" y="17" rx="1" ry="1" transform="rotate(-90 19 18)" fill="#ffffff" className="color000 svgShape"></rect>
                                                                                        <path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39 1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z" fill="#ffffff" className="color000 svgShape"></path>
                                                                                        <path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z" fill="#ffffff" className="color000 svgShape"></path>
                                                                                    </g>
                                                                                </g>
                                                                            </svg>

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    : null}
                                                {/* ---- End Tab 1 ---- */}

                                                {/* ---- Tab 2 ---- */}
                                                {this.state.showSkill ?
                                                    <div className="tab-pane fade show active" id="t-tab2" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="tab-skill">
                                                                    <div className="skill-main doctor-details-biography">
                                                                        {/* Single Skill */}
                                                                        <div className="single-skill">
                                                                            <div className="skill-title">
                                                                                <h4>Statistics</h4>
                                                                            </div>
                                                                            <div className="progress">
                                                                                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                                                                    <span>70%</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/* End Single Skill */}
                                                                        {/* Single Skill */}
                                                                        <div className="single-skill">
                                                                            <div className="skill-title">
                                                                                <h4>Machine Learning</h4>
                                                                            </div>
                                                                            <div className="progress">
                                                                                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                                                                    <span>80%</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/* End Single Skill */}
                                                                        {/* Single Skill */}
                                                                        <div className="single-skill">
                                                                            <div className="skill-title">
                                                                                <h4>Python</h4>
                                                                            </div>
                                                                            <div className="progress">
                                                                                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                                                                    <span>90%</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/* End Single Skill */}
                                                                        {/* Single Skill */}
                                                                        <div className="single-skill">
                                                                            <div className="skill-title">
                                                                                <h4>Web Development</h4>
                                                                            </div>
                                                                            <div className="progress">
                                                                                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>
                                                                                    <span>85%</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/* End Single Skill */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    : null}
                                                {/* ---- End Tab 2 ----*/}

                                                {/* ---- Tab 3 ---- */}
                                                {this.state.showContact ?
                                                    <div className="tab-pane fade show active" id="t-tab3" role="tabpanel">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="tab-contact">
                                                                    <div className="contact-address-wrapper">
                                                                        <div className="single-info">
                                                                            <div className="contact-address-icon">
                                                                                <i className="fa fa-phone"></i>
                                                                            </div>
                                                                            <div className="contact-address-text">
                                                                                <h3>Phone Number :</h3>
                                                                                <span>WhatsApp / Call : +918051319411</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="single-info">
                                                                            <div className="contact-address-icon">
                                                                                <i className="fa fa-envelope"></i>
                                                                            </div>
                                                                            <div className="contact-address-text">
                                                                                <h3>Email Address :</h3>
                                                                                <span>Main Email : <Link to="mailto:hritwij01shrivastava@gmail.com">hritwij01shrivastava@gmail.com</Link></span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="single-info">
                                                                            <div className="contact-address-icon">
                                                                                <i className="fa fa-link"></i>
                                                                            </div>
                                                                            <div className="contact-address-text">
                                                                                <h3>Website Link :</h3>
                                                                                <span>Website : <Link to="/">hritwij.com</Link></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    : null}
                                                {/* ---- End Tab 3 ---- */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
