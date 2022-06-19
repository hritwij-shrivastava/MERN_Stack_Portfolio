import React, { Component } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import '../static/css/admin.css'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../Redux/actions/authActions";
import spinner from '../static/img/loader.gif'
import kiteretsu from '../static/img/kiteretsu.jpg'

class Login extends Component {
    state = {
        show: false,
        email: "",
        password: "",
        errors: "",
        captcha: "", 
    }
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            window.location.href = "/main"
        }
    }
    onChangeEmail = (e) => {
        const val = e.target.value
        this.setState({
            email: val
        })
    }
    onChangePsw = (e) => {
        const val = e.target.value
        this.setState({
            password: val
        })
    }
    submit = async (e) => {
        e.preventDefault()
        let url = 'https://api.ipify.org?format=json'
        var userData = {}
        let ip

        this.setState({
            show: true
        })

        await fetch(url).then(res => res.json())
            .then(out => {
                ip = out.ip;
                userData = {
                    email: this.state.email,
                    password: this.state.password,
                    captcha: this.state.captcha,
                    ip: ip
                };

            })
        
        await this.props.loginUser(userData);

        setTimeout(() => {
            this.setState({
                show: false
            })
            if (this.props.auth.isAuthenticated) {
                window.location.href = "/main"
            }
        }, 5000)

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.auth.isAuthenticated) {
            window.location.href = "/main"
        }
    }
    onChangeGoogleReCaptcha=async(value)=> {
        
        await this.setState({
            captcha: value
        })
    }

    render() {
        return (
            <>
                <div className="firstcontainer" style={{ background: "#F6F6F6", paddingTop: "70px" }}>
                    {this.state.show ?
                        <div className="spinner">
                            <div className="spinner-body">
                                <div className="spinner-inner ">
                                    <div className="spinnerContainer">
                                        <img src={spinner} alt="" srcSet="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10 col-lg-12 col-md-9">
                                <div className="card o-hidden border-0 shadow-lg my-5">
                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className="col-lg-6 d-none d-lg-block bg-login-image" style={{backgroundImage:`url(${kiteretsu})`}}></div>
                                            <div className="col-lg-6">
                                                <div className="p-5">
                                                    <div className="text-center">
                                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                    </div>
                                                    <form className="user">
                                                        <div className="form-group">
                                                            <input type="email" autoComplete="disabled" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." value={this.state.email} onChange={(e) => { this.onChangeEmail(e) }} />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" autoComplete="disabled" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" value={this.state.password} onChange={(e) => { this.onChangePsw(e) }} />
                                                        </div>
                                                        <div style={{width: "100%",padding:"10px",marginTop: "25px"}}>
                                                            <div className="captcha" style={{ transform: "scale(0.85)" }}>
                                                                <ReCAPTCHA sitekey="6LcdzGAgAAAAAD_PjYG4-lz-nT84kBqpgz9kq7Vj" onChange={this.onChangeGoogleReCaptcha} />
                                                            </div>
                                                        </div>
                                                        <button className="btn btn-primary btn-user btn-block custom-controlcolor" onClick={(e) => { this.submit(e) }}>
                                                            Login
                                                        </button>
                                                        <hr />
                                                        <button className="btn btn-google btn-user btn-block">
                                                            <i className="fab fa-google fa-fw"></i> Login with Google
                                                        </button>
                                                        <button className="btn btn-facebook btn-user btn-block">
                                                            <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                        </button>

                                                    </form>
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
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);