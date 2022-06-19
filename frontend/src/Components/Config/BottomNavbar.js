import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../static/css/bottomnavbar.css'
import bag from '../../static/img/bag.svg'
import bagFill from '../../static/img/bag-fill.svg'
import blog from '../../static/img/blog.svg'
import blogFill from '../../static/img/blog-fill.svg'
import call from '../../static/img/call.svg'
import callFill from '../../static/img/call-fill.svg'

export default class BottomNavbar extends Component {

    state = {
        home: false,
        portfolio: false,
        blog: false,
        contact: false,
    }

    componentDidMount() {
        window.addEventListener('locationchange', this.onUrlChange());
    }


    onUrlChange = () => {
        const pathname = window.location.pathname
        let parts = pathname.split("/");
        let basePath = parts[1];
        if (basePath === "home" || basePath === "") {
            this.setState({
                home: true,
                portfolio: false,
                blog: false,
                contact: false,
            })
        }
        if (basePath === "portfolio") {
            this.setState({
                portfolio: true,
                home: false,
                blog: false,
                contact: false,
            })
        }
        if (basePath === "blog") {
            this.setState({
                blog: true,
                home: false,
                portfolio: false,
                contact: false,
            })
        }
        if (basePath === "contact") {
            this.setState({
                contact: true,
                home: false,
                portfolio: false,
                blog: false,
            })
        }
        if (basePath === "about" || basePath === "services") {
            this.setState({
                home: false,
                portfolio: false,
                blog: false,
                contact: false,
            })
        }

    };

    render() {
        return (
            <>
                <div className="ytm-pivot-bar-renderer">
                    <button onClick={this.onUrlChange} className="ytm-pivot-bar-item-renderer">
                        <div className={!this.state.home ? "pivot-bar-item-tab pivot-w2w" : "pivot-bar-item-tab pivot-w2w active"}>
                            <div className="c3-icon">
                                {!this.state.home ?
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M12,4.44l7,6.09V20h-4v-5v-1h-1h-4H9v1v5H5v-9.47L12,4.44 M12,3.12l-8,6.96V21h6v-6h4v6h6V10.08L12,3.12L12,3.12z"></path>
                                    </svg>
                                    : null}
                                {this.state.home ?
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
                                        <g><path d="M4,21V10.08l8-6.96l8,6.96V21h-6v-6h-4v6H4z"></path></g>
                                    </svg>
                                    : null}
                            </div>
                            <div className="pivot-bar-item-title" onClick={this.onUrlChange} >
                                <Link to="/">Home</Link>
                            </div>
                        </div>
                    </button>
                    <button onClick={this.onUrlChange} className={!this.state.portfolio ? "pivot-bar-item-tab pivot-w2w" : "pivot-bar-item-tab pivot-w2w active"}>
                        <div className="pivot-bar-item-tab pivot-w2w">
                            <div className="c3-icon">
                                {!this.state.portfolio ?
                                    <img src={bag} alt="" srcSet="" />
                                    : null}
                                {this.state.portfolio ?
                                    <img src={bagFill} alt="" srcSet="" />
                                    : null}
                            </div>
                            <div className="pivot-bar-item-title" onClick={this.onUrlChange}>
                                <Link to="/portfolio">Portfolio</Link>

                            </div>

                        </div>

                    </button>
                    <button onClick={this.onUrlChange} className={!this.state.blog ? "pivot-bar-item-tab pivot-w2w" : "pivot-bar-item-tab pivot-w2w active"}>
                        <div className="pivot-bar-item-tab pivot-w2w">
                            <div className="c3-icon">
                                {!this.state.blog ?
                                    <img src={blog} alt="" srcSet="" />
                                    : null}
                                {this.state.blog ?
                                    <img src={blogFill} alt="" srcSet="" />
                                    : null}
                            </div>
                            <div className="pivot-bar-item-title">
                                <Link to="/blog">Blog</Link>
                            </div>

                        </div>
                    </button>
                    <button onClick={this.onUrlChange} className={!this.state.contact ? "pivot-bar-item-tab pivot-w2w" : "pivot-bar-item-tab pivot-w2w active"}>
                        <div className="pivot-bar-item-tab pivot-w2w">
                            <div className="c3-icon">
                                {!this.state.contact ?
                                    <img src={call} alt="" srcSet="" />
                                    : null}
                                {this.state.contact ?
                                    <img src={callFill} alt="" srcSet="" />
                                    : null}
                            </div>
                            <div className="pivot-bar-item-title">
                                <Link to="/contact">Contact</Link>
                            </div>
                        </div>
                    </button>
                </div>
            </>
        )
    }
}
