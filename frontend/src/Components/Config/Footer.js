import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import assetContext from '../../Context/Home/assetContext'

export default function Footer() {
    const context = useContext(assetContext);
    const {webAddress,userdata} = context;

    return (
        <>
            <footer className="footer" style={{paddingBottom: "0px" ,background: "#17222b"}}>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 footer-widget-resp">
                                <div className="footer-widget">
                                    <h6 className="footer-title">About Me</h6>
                                    <img src="/hritwij.png" alt="footer logo" className="img-fluid footer-logo" style={{maxWidth: "40%"}}/>
                                        {/* <p className="footer-desc">
                                        I'm an experienced software engineer. In my two years in this industry, I've sharpened my analytical thinking and collaboration skills.
                                        </p> */}
                                        <div className="footer-social-links">
                                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hritwij/">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/hritwij.shrivastava/">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a target="_blank" rel="noreferrer" href="https://github.com/hritwij-shrivastava">
                                                <i className="fab fa-github"></i>
                                            </a>
                                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCXb45TeeuSM_OYDY-UN6WCQ">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 footer-widget-resp">
                                <div className="footer-widget footer-widget-pl">
                                    <h6 className="footer-title">Usefull Links</h6>
                                    <ul className="footer-links">
                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/services">My Services</Link>
                                        </li>
                                        <li>
                                            <a href={`${webAddress}${userdata.resume}`} target="_blank" rel="noreferrer">
                                                My Resume
                                            </a>
                                        </li>
                                        <li>
                                            <Link to="/portfolio">My Works</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Get in Touch</Link>
                                        </li>
                                        {/* <li>
                                            <Link to="/">Privacy Policy</Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 footer-widget-resp">
                                <div className="footer-widget">
                                    <h6 className="footer-title">Contact Info</h6>
                                    <div className="footer-contact-info-wrap">
                                        <ul className="footer-contact-info-list">
                                            <li>
                                                <h6>Address:</h6>
                                                <p>
                                                    Kestopur, Kolkata , West Bengal
                                                    <br/>India-700102
                                                </p>
                                            </li>
                                            <li>
                                                <h6>E-Mail &amp; Phone:</h6>
                                                <div className="text">
                                                    <p>+91 8051319411</p>
                                                    <p>hritwij01shrivastava@gmail.com</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
