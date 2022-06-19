import React, { Component } from 'react'
import { Dropdown, Collapse } from 'react-bootstrap'
import '../static/css/admin-home.css'
import '../static/css/bootstrap.css'
import '../static/css/admin.css'
import assetContext from '../Context/Home/assetContext'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../Redux/actions/authActions";

import Cards from './Utilities/Cards';
import ProfilePage from './Utilities/ProfilePage'
import AboutPage from './Utilities/AboutPage'
import ServicesPage from './Utilities/ServicesPage'
// import PortfolioPage from './Utilities/PortfolioPage'
import Background from './Utilities/Background'

import Post from './Blog/Post'

class Mainpage extends Component {

    static contextType = assetContext

    state = {
        showComponents: false,
        showBlogPost: false,
        showUtilities: false,
        showProfile: false,
        showBg: false,
        showAbout: false,
        showServices: false,
        // showPortfolio: false,
        showPages: false,
    }
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (!this.props.auth.isAuthenticated) {
            window.location.href = "/login"
        }
    }

    setAllFalse = () => {
        this.setState({
            showComponents: false,
            showBlogPost: false,
            showUtilities: false,
            showProfile: false,
            showBg: false,
            showAbout: false,
            showServices: false,
            // showPortfolio: false,
            showPages: false,
        })
    }

    setStateTrue = async (stateName) => {
        await this.setAllFalse();
        this.setState({
            [`${stateName}`]: true,
        })
    }


    onLogoutClick = async(e) => {
        e.preventDefault();
        await this.props.logoutUser();
        setTimeout(()=>{
            this.setState({})
            window.location.href = "/login"
        },1000)
        
    };

    onNewBlog = async () => {
        var id = await this.context.newBlog()
        var err = this.context.err
        if(!err){
            window.location.href = `/edit/${id}`
        }
        else{
            var notice = this.context.serverRes
            alert(notice)
        }    
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.auth.isAuthenticated) {
            window.location.href = "/login"
        }
    }

    render() {
        return (
            <>
                <div className="firstcontainer" style={{ background: "#F6F6F6" }}>
                    <div id="wrapper">
                        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                            <button className="sidebar-brand d-flex align-items-center justify-content-center">
                                <div className="sidebar-brand-icon rotate-n-15">
                                    <i className="fas fa-laugh-wink"></i>
                                </div>
                                <div className="sidebar-brand-text mx-3">Admin Panel</div>
                            </button>
                            <hr className="sidebar-divider my-0" />
                            <li className="nav-item">
                                <div className="U26fgb">
                                    <button className="Vwe4Vb-MbhUzd" onClick={this.onNewBlog}>
                                        <span className="">
                                            <span className="">
                                                <span className="DPvwYc">+</span>
                                                <span className="MIJMVe">New Post</span>
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </li>
                            <hr className="sidebar-divider" />
                            <li className="nav-item">
                                <button className="nav-link">
                                    <i className="fas fa-fw fa-tachometer-alt"></i>
                                    <span>Dashboard</span>
                                </button>
                            </li>
                            <hr className="sidebar-divider" />
                            <div className="sidebar-heading">
                                Interface
                            </div>
                            <li className="nav-item">
                                <button onClick={() => this.setState({ showComponents: !this.state.showComponents })} aria-controls="collapseTwo" aria-expanded={this.state.showComponents} className={this.state.showComponents ? "nav-link" : "nav-link collapsed"} data-toggle="collapse" data-target="#collapseTwo">
                                    <i className="fas fa-fw fa-cog"></i>
                                    <span>Blog</span>
                                </button>
                                <Collapse in={this.state.showComponents}>
                                    <div id="collapseTwo">
                                        <div className="bg-white py-2 collapse-inner rounded">
                                            <h6 className="collapse-header">Blog Components:</h6>
                                            <button className="collapse-item" onClick={() => this.setStateTrue("showBlogPost")}>Blog Post</button>
                                        </div>
                                    </div>
                                </Collapse>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => this.setState({ showUtilities: !this.state.showUtilities })} aria-controls="collapseUtilities" aria-expanded={this.state.showUtilities} className={this.state.showUtilities ? "nav-link" : "nav-link collapsed"} data-toggle="collapse" data-target="#collapseUtilities">
                                    <i className="fas fa-fw fa-wrench"></i>
                                    <span>Utilities</span>
                                </button>
                                <Collapse in={this.state.showUtilities}>
                                    <div id="collapseUtilities">
                                        <div className="bg-white py-2 collapse-inner rounded">
                                            <h6 className="collapse-header">Asset Utilities:</h6>
                                            <button className="collapse-item" onClick={() => this.setStateTrue("showProfile")}>Profile</button>
                                            <button className="collapse-item" onClick={() => this.setStateTrue("showBg")}>Background</button>
                                            <button className="collapse-item" onClick={() => this.setStateTrue("showAbout")}>About</button>
                                            <button className="collapse-item" onClick={() => this.setStateTrue("showServices")}>Services</button>
                                            {/* <button className="collapse-item" onClick={() => this.setStateTrue("showPortfolio")}>Portfolio</button> */}
                                        </div>
                                    </div>
                                </Collapse>
                            </li>
                            <hr className="sidebar-divider" />
                        </ul>
                        <div id="content-wrapper" className="d-flex flex-column">
                            <div id="content">
                                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                        <i className="fa fa-bars"></i>
                                    </button>
                                    <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <ul className="navbar-nav ml-auto">
                                        <div className="topbar-divider d-none d-sm-block"></div>
                                        <li className="nav-item dropdown no-arrow">
                                            <Dropdown>
                                                <Dropdown.Toggle id="userDropdown" className="nav-link">
                                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Hritwij Shrivastava</span>
                                                    <img className="img-profile rounded-circle" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg" alt="..." />
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="h1">
                                                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                        Profile
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="h1">
                                                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                                        Settings
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="h1">
                                                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                                        Activity Log
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="h1" onClick={this.onLogoutClick}>
                                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                        Logout
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="container-fluid">
                                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                        <h1 className="h3 mb-0 text-gray-800">Cards</h1>
                                    </div>
                                    <Cards/>
                                    {this.state.showBlogPost ? <Post/> : null}
                                    {this.state.showProfile ? <ProfilePage/> : null}
                                    {this.state.showBg ? <Background/> : null}
                                    {this.state.showAbout ? <AboutPage /> : null}
                                    {this.state.showServices ? <ServicesPage /> : null}
                                    {/* {this.state.showPortfolio ? <PortfolioPage /> : null} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

Mainpage.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Mainpage);