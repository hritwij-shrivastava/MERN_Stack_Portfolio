import React, { Component } from 'react'
import BottomNavbar from './BottomNavbar';
import { NavLink } from "react-router-dom";
import '../../static/css/bootstrap.css'
import '../../static/css/all.css'
import '../../static/css/navbar.css'
import '../../static/css/ionicons.min.css'
import '../../static/css/mainHome.css'
import '../../static/css/myStyle.css'
import '../../static/css/about.css'
import '../../static/css/services.css'
import '../../static/css/contact.css'

export default class Navbar extends Component {
    state = {
        class: "collapse navbar-collapse",
        clicked: false,
    }
    componentDidUpdate() {
        this.BottomNavbar.onUrlChange()
    }
    onClick = () => {
        if (!this.state.clicked) {
            this.setState({
                class: "collapse navbar-collapse show",
                clicked: true,
            })
        }
        if (this.state.clicked) {
            this.setState({
                class: "collapse navbar-collapse",
                clicked: false,
            })
        }
    }
    render() {
        return (
            <>
                <header className="navFix">
                    <nav className="navbar navbar-expand-lg">
                        
                        <div className="container">
                            <a href="/hritwij.png" target="_blank" rel="noreferrer" className="logo navbar-brand">
                                <img src="/hritwij.png" className="img-fluid footer-logo" width="135px" height="45px" alt="hritwij"/>
                            </a>
                            <button onClick={this.onClick} className="navbar-toggler" id="navbarBtn" style={{ color: "black" }} type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded={this.state.clicked} aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={this.state.class} id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item"><NavLink end="active" onClick={this.onClick} to="/" className="nav-link" id="homeBtn">Home</NavLink></li>
                                    <li className="nav-item"><NavLink end="active" onClick={this.onClick} to="/about/" className="nav-link" id="aboutBtn">About</NavLink></li>
                                    <li className="nav-item"><NavLink end="active" onClick={this.onClick} to="/services/" className="nav-link" id="servicesBtn">Services</NavLink></li>
                                    <li className="nav-item"><NavLink end="active" onClick={this.onClick} to="/portfolio/" className="nav-link" id="portfolioBtn">Portfolio</NavLink></li>
                                    <li className="nav-item"><NavLink end="active" onClick={this.onClick} to="/blog/" className="nav-link" id="blogBtn">Blog</NavLink></li>
                                    <li className="nav-item"><NavLink end="active" onClick={this.onClick} to="/contact/" className="nav-link" id="contactBtn">Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <BottomNavbar ref={instance => { this.BottomNavbar = instance; }} />
            </>
        )
    }
}
