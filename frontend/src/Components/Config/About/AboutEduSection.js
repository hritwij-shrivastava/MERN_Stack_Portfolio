import React, { Component } from 'react'

export default class AboutEduSection extends Component {
    state = {
        showExp: false,
        showEdu: true
    }

    onEdu = () => {
        this.setState({
            showEdu: true,
            showExp: false
        })
    }
    onExp = () => {
        this.setState({
            showEdu: false,
            showExp: true
        })
    }
    render() {
        return (
            <>
                <div className="port_education_setions prt_toppadder80 prt_bottompadder80 "> {/* start Education section  */}
                    <div className="education_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="port_heading_wrapper text-center prt_bottompadder40">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <button className="nav-link active" id="home-tab" data-toggle="tab" onClick={this.onEdu} role="tab" aria-controls="home" aria-selected="true">My Education</button>
                                            </li>
                                            <li className="nav-item">
                                                <button className="nav-link" id="profile-tab" data-toggle="tab" onClick={this.onExp} role="tab" aria-controls="profile" aria-selected="false">My Experiences</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    {this.state.showEdu ?
                                        <div className="education_main_wrapper ">
                                            {/* first box */}
                                            <div className="education_box education_firsrtbox firstbox">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-4 col-sm-12 col-12 align-self-center">
                                                        <div className="education_mleft education_left ">
                                                            <div className="edu_mainyear edu_leftyear">
                                                                <h1>2020</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-8 col-sm-12 col-12 align-self-center">
                                                        <div className="education_mright education_right ">
                                                            <div className="education_minfo education_rinfo ">
                                                                <div className="prt_rightside_title">
                                                                    <div className="left_title_box">
                                                                        <div className="left_title">
                                                                            <h4>01</h4>
                                                                        </div>
                                                                        <div className="right_title bg-pink">
                                                                            {/* <h4>Techno India, Kolkata</h4> */}
                                                                            <h4>B.Tech </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3 className="education_place"><span className="data_hover">B.Tech </span> In Electronics and Instrumentation</h3>
                                                                <p>I graduated from Techno India with my Bachelor of Technology, in Electronics and Instrumentation in 2020 with a CGPA of 7.61. </p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* first box */}

                                            {/* second box */}
                                            <div className="education_box education_secondbox secondbox">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-8 col-sm-12 col-12 align-self-center">
                                                        <div className="education_mright education_left ">
                                                            <div className="education_minfo education_rinfo ">
                                                                <div className="prt_rightside_title" >
                                                                    <div className="left_title_box">
                                                                        <div className="right_title bg-yellow">
                                                                            {/* <h4>College of Commerce, arts and science, Patna</h4> */}
                                                                            <h4>XII<sup>th</sup> PCM</h4>
                                                                        </div>
                                                                        <div className="left_title">
                                                                            <h4>02</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3 className="education_place"><span className="data_hover">Intermediate </span> XII<sup>th</sup> PCM</h3>
                                                                <p>I did my Intermediate from college of commerce, arts and science , major in Mathematics, Physics and Chemistry with an aggregate of 72.2%.</p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-4 col-sm-12 col-12 align-self-center">
                                                        <div className="education_mleft education_right ">
                                                            <div className="edu_mainyear edu_leftyear">
                                                                <h1>2015</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* second box */}
                                            {/* third box */}
                                            <div className="education_box education_firsrtbox firstbox">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-4 col-sm-12 col-12 align-self-center">
                                                        <div className="education_mleft education_left ">
                                                            <div className="edu_mainyear edu_leftyear">
                                                                <h1>2013</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-8 col-sm-12 col-12 align-self-center">
                                                        <div className="education_mright education_right ">
                                                            <div className="education_minfo education_rinfo ">
                                                                <div className="prt_rightside_title">
                                                                    <div className="left_title_box">
                                                                        <div className="left_title">
                                                                            <h4>03</h4>
                                                                        </div>
                                                                        <div className="right_title bg-pink">
                                                                            {/* <h4>Marwari High School, Patna City</h4> */}
                                                                            <h4>X<sup>th</sup></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3 className="education_place"><span className="data_hover">Matriculation </span> X<sup>th</sup></h3>
                                                                <p>I completed my schooling from Marwari High School Patna City in 2013 with an aggregate of 80.4%.</p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* third box */}
                                        </div>
                                        : null}
                                    {this.state.showExp ?
                                        <div className="education_main_wrapper ">

                                            {/* First box */}
                                            <div className="education_box education_secondbox secondbox">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-8 col-sm-12 col-12 align-self-center">
                                                        <div className="education_mright education_left ">
                                                            <div className="education_minfo education_rinfo ">
                                                                <div className="prt_rightside_title">
                                                                    <div className="left_title_box">
                                                                        <div className="right_title bg-yellow">
                                                                            <h4>Tata Consultancy Services</h4>
                                                                        </div>
                                                                        <div className="left_title">
                                                                            <h4>01</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3 className="education_place"><span className="data_hover">Assistant System Engineer - Trainee </span></h3>
                                                                <p>I started my career with TCS in 2021 as a cyber security engineer which includes collaborating with development teams to 
                                                                    remediate vulnerabilities throughout the software development lifecycle.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-4 col-sm-12 col-12 align-self-center">
                                                        <div className="education_mleft education_right ">
                                                            <div className="edu_mainyear edu_leftyear">
                                                                <h1>2021</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* First box */}
                                            {/* Second box */}
                                            <div className="education_box education_firsrtbox firstbox">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-4 col-sm-12 col-12 align-self-center">
                                                        <div className="education_mleft education_left ">
                                                            <div className="edu_mainyear edu_leftyear">
                                                                <h1>2020</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-8 col-sm-12 col-12 align-self-center">
                                                        <div className="education_mright education_right ">
                                                            <div className="education_minfo education_rinfo ">
                                                                <div className="prt_rightside_title">
                                                                    <div className="left_title_box">
                                                                        <div className="left_title">
                                                                            <h4>02</h4>
                                                                        </div>
                                                                        <div className="right_title bg-pink">
                                                                            <h4>Hillman Mills Pvt Ltd</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h3 className="education_place"><span className="data_hover">Full Stack Web Developer</span></h3>
                                                                <p>I did 3 months internship from Hillman Pvt Ltd as a Django Developer. Here IdDeveloped efficient and maintainable website
                                                                    according to business objectives and needs of clients</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Second box */}

                                        </div>
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
