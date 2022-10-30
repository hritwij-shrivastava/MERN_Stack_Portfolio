import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";
import moment from 'moment'

import Card from './Config/Services/Card'
import LightBox from './Config/LightBox'
import assetContext from '../Context/Home/assetContext'

import s1 from '../static/img/s1.png'
import s2 from '../static/img/s2.png'
import s3 from '../static/img/s3.png'
import s4 from '../static/img/s4.png'
import s5 from '../static/img/s5.png'
import s6 from '../static/img/s7.png'
import hme from '../static/img/hme.png'

export default class Services extends Component {
    static contextType = assetContext

    constructor(props) {
        super(props);
        this.child = React.createRef();
    }


    componentDidMount = async () => {

        if (Object.keys(this.context.userdata).length === 0) {
            await this.context.getData()
        }

    } // eslint-disable-line react-hooks/exhaustive-deps

    update = () => {
        this.child.current.update();
    }
    render() {
        var images = []
        var cert = this.context.userdata.certificate
        if (Object.keys(this.context.userdata).length !== 0) {
            for (var key of Object.keys(cert)) {
                images.push(`${this.context.webAddress}${cert[key]}`)
            }

        }
        return (
            <>
                <Helmet>
                    <link rel="canonical" href="https://hritwij.com/services/" />
                </Helmet>
                <div className="firstcontainer">
                    <LightBox ref={this.child} images={images} />
                    <div style={{ paddingTop: "35px", background: "-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)" }}>
                        <div className="container">
                            <div className="row justify-content-center mb-5">
                                <div className="col-md-7 heading-section text-center" style={{ color: "#ffff" }}>
                                    <span className="subheading">Experience Feeds</span>
                                    <h2 style={{ color: "#fff" }}>Work Experience</h2>
                                </div>
                            </div>
                            <div className="row service-area-wrapper">
                                <div className="col-lg-4 col-md-6">
                                    <Link to="/services" className="single-service service-modal myrounded">
                                        <img src={s1} alt="" />
                                        <h6 className="title">Machine Learning</h6>
                                        <p>MIT certified data scientist. Projects include creating book recommendation system with more than 80% accuracy.</p>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Link to="/services" className="single-service service-modal myrounded">
                                        <img src={s2} alt="" />
                                        <h6 className="title">Deep Learning / AI</h6>
                                        <p>Developed Sign language detection and speech conversion. Interpreted all 26 alphabet of English language and 5 other signals.</p>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Link to="/services" className="single-service service-modal myrounded">
                                        <img src={s3} alt="" />
                                        <h6 className="title">Data Analytics</h6>
                                        <p>MIT certified statistician. Gathered and analyzed data and worked on the improvement of existing statistical models. </p>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Link to="/services" className="single-service service-modal myrounded">
                                        <img src={s5} alt="" />
                                        <h6 className="title">Web Development</h6>
                                        <p>Developed efficient and maintainable software according to business objectives and needs of clients.</p>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Link to="/services" className="single-service service-modal myrounded">
                                        <img src={s4} alt="" />
                                        <h6 className="title">Cyber Security</h6>
                                        <p>Collaborate with development teams to prioritize and remediate vulnerabilities throughout the software development lifecycle.</p>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Link to="/services" className="single-service service-modal myrounded">
                                        <img src={s6} alt="" />
                                        <h6 className="title">Robotic Process Automation</h6>
                                        <p>UiPath Certified Advanced RPA Developer. Experience building RPA solutions using UiPath. Good knowledge of RE Framework.</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ paddingTop: "0px", background: "white", maxHeight: "300px" }}>
                        <Card update={this.update} data={images} />
                    </div>

                    <div style={{ paddingTop: "35px", background: "#ffff" }}>
                        <section className="flat-contact-me">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <div className="contact-me-content wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                                            <h4 className="section-subtitle">Hire Me</h4>
                                            <h2 className="section-45px-montserrat margin-top-15 margin-bottom-45">Any Project in your
                                                mind</h2>
                                            <div className="button-contact-me wow fadeInDown" style={{ visibility: "visible", animationName: "fadeInDown" }}>
                                                <Link to="/contact" className="button-footer arrow-btn btn-st">Hire Me Now</Link>
                                                <a href={`${this.context.webAddress}${this.context.userdata.resume}`} target="_blank" rel="noreferrer" className="button-footer clound-down btn-st style-4">Download CV</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="contact-me-post wow fadeInRight" style={{ visibility: "visible", animationName: "fadeInRight" }}>
                                            <img src={hme} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div style={{ paddingTop: "35px", background: "#F6F6F6" }}>
                        <div className="container">
                            <div className="row justify-content-center mb-5">
                                <div className="col-md-7 heading-section text-center">
                                    <span className="subheading">Blogs Feeds</span>
                                    <h2>Latest Blogs</h2>
                                </div>
                            </div>
                            {(Object.keys(this.context.userdata).length !== 0) ?
                                <div className="row">
                                    {Object.keys(this.context.userdata.blog).map((key, index) => {
                                        return (
                                            <div className="col-lg-4 col-sm-6" key={index}>
                                                <article className="single-blog">
                                                    <div className="blog-thumbnail">
                                                        <Link to={this.context.userdata.blog[key].url}>
                                                            <img src={`${this.context.webAddress}${this.context.userdata.blog[key].textAreaArray[0][1]}`} alt={this.context.userdata.blog[key].textAreaArray[0][2]} />
                                                        </Link>
                                                        <Link to={this.context.userdata.blog[key].url} className="catagory-name" >Blog</Link>
                                                        <div className="blog-date">
                                                            <h3>{moment(this.context.userdata.blog[key].date).format('DD')}</h3>
                                                            <span>{moment(this.context.userdata.blog[key].date).format('MMM')}</span>
                                                        </div>
                                                    </div>
                                                    <div className="blog-info">
                                                        <h4 className="author-name">By <Link to={this.context.userdata.blog[key].url}>Hritwij Shrivastava</Link></h4>
                                                        <h3 className="post-title"><Link to={this.context.userdata.blog[key].url}>{this.context.userdata.blog[key].blogTitle}</Link></h3>
                                                    </div>
                                                </article>
                                            </div>
                                        )
                                    })}
                                </div>
                                : null}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

