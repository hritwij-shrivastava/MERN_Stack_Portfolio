import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import assetContext from '../Context/Home/assetContext'

export default function Contact() {
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [c, setC] = useState("")
    const [d, setD] = useState("")

    const context = useContext(assetContext);
    const {userdata,getData} = context;

    useEffect(() => {
        if (Object.keys(userdata).length === 0) {
            getData()
        }
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    const formSubmit = (e) => {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwE6CPMai9-VcRwFcZ0r4tn-vTfPSrTMumni-7LaG1lXssfJKa7IxiALKnOMajhrnTO/exec'

        let url = 'https://api.ipify.org?format=json';
        var formData = new FormData();
        let ip;

        fetch(url)
            .then(res => res.json())
            .then(out => {
                ip = out.ip;
                formData.append("Name", a);
                formData.append("Email", b);
                formData.append("Subject", c);
                formData.append("Message", d);
                formData.append("IP", ip);
                if (a === null || a === "" || b === null || b === "" || c === null || c === "" || d === null || d === "") {
                    alert("Please Fill All Required Field");
                }
                else {
                    fetch(scriptURL, { method: 'POST', body: formData })
                        .then(response => {
                            alert("Message Sent");
                        })
                        .catch(error => {
                            alert("Error sending message");
                        })
                }

            })
        // .catch(err => console.error('Error!', err.message));

    }
    return (
        <>
            <Helmet>
                <link rel="canonical" href="https://hritwij.com/contact/" />
            </Helmet>
            <div className="firstcontainer" style={{ background: "#F6F6F6", paddingTop: "0.02px" }}>
                <div style={{ background: "#F6F6F6", paddingTop: "50px" }}>
                    <div className="contact-form">
                        <div className="row no-gutters justify-content-center">
                            <div className="col-md-12">
                                <div className="wrapper">
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="contact-wrap w-100 p-md-5 p-4">
                                                <h3>Contact me</h3>
                                                <div className="row mb-4">
                                                    <div className="col-md-4">
                                                        <div className="dbox w-100 d-flex align-items-start">
                                                            <div className="text">
                                                                <p style={{ color: "black" }}><span>Address:</span> Tarulia 1st Lane, Mondalpara, Kestopur Kolkata - 700102</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="dbox w-100 d-flex align-items-start">
                                                            <div className="text">
                                                                <p><span>Email:</span>
                                                                    <a href="mailto: abc@example.com">
                                                                        <span style={{ textTransform: "lowercase" }}>hritwij01shrivastava@gmail.com</span>
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="dbox w-100 d-flex align-items-start">
                                                            <div className="text">
                                                                <p><span>Phone:</span> <a href="tel://1234567920">+ 91 8051319411</a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <form id="contactForm" name="subgoogle" className="contactForm">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <input type="text" onChange={(e) => { setA(e.target.value) }} className="form-control" name="Name" id="name" placeholder="Name" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <input type="email" onChange={(e) => { setB(e.target.value) }} className="form-control" name="Email" id="email" placeholder="Email" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <input type="text" onChange={(e) => { setC(e.target.value) }} className="form-control" name="Subject" id="subject" placeholder="Subject" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <textarea name="Message" onChange={(e) => { setD(e.target.value) }} className="form-control" id="message" cols="30" rows="4"
                                                                    placeholder="Create a message here" required></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <button className="pagelink mybtn mybtn-bg" onClick={formSubmit}><span style={{ textTransform: "none" }}>Send Message</span></button>
                                                                <div className="submitting"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="w-100 social-media mt-5">
                                                    <h3>Follow me here</h3>
                                                    <p>
                                                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/hritwij.shrivastava/"><img alt="" src="https://img.icons8.com/color/48/000000/facebook.png" /></a>
                                                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hritwij/"><img alt="" src="https://img.icons8.com/fluency/48/000000/linkedin.png" /></a>
                                                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/hritwij_shrivastava/"><img alt="" src="https://img.icons8.com/fluency/48/000000/instagram-new.png" /></a>
                                                        <a target="_blank" rel="noreferrer" href="https://github.com/hritwij-shrivastava"><img alt="" src="https://img.icons8.com/ios-filled/50/000000/github.png" /></a>
                                                        <a target="_blank" rel="noreferrer" href="https://www.kaggle.com/hritwij"><img alt="" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-kaggle-an-online-community-of-data-scientists-and-machine-learners-owned-by-google-logo-shadow-tal-revivo.png" /></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-stretch">
                                            <div id="map" className="bg-white">
                                                <iframe title='address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6302.538717521901!2d88.43428927608286!3d22.591233270205546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275c3d844cfa3%3A0x765bb69526828db7!2sOnline%20works!5e1!3m2!1sen!2sin!4v1641370818092!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
