import React from 'react'
import { Link } from "react-router-dom"

export default function Footer() {
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
                                            <Link to="/">
                                                <i className="fab fa-linkedin"></i>
                                            </Link>
                                            <Link to="/">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                            <Link to="/">
                                                <i className="fab fa-github"></i>
                                            </Link>
                                            <Link to="/">
                                                <i className="fab fa-youtube"></i>
                                            </Link>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 footer-widget-resp">
                                <div className="footer-widget footer-widget-pl">
                                    <h6 className="footer-title">Usefull Links</h6>
                                    <ul className="footer-links">
                                        <li>
                                            <Link to="/">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/">My Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/">My Resume</Link>
                                        </li>
                                        <li>
                                            <Link to="/">My Works</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Get in Touch</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Privacy Policy</Link>
                                        </li>
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
