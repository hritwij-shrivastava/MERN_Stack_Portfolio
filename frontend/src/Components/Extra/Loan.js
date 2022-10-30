import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import SweetAlert from 'react-bootstrap-sweetalert';
import ReCAPTCHA from 'react-google-recaptcha'
import DatePicker from 'react-date-picker';   //https://www.npmjs.com/package/react-date-picker
import assetContext from '../../Context/Home/assetContext'
import '../../static/css/loan.css'

export default class Loan extends Component {
    static contextType = assetContext

    constructor(props) {
        super(props);

        this.state = {
            alert: false,
            // loanStatus : false,
            dob: new Date(),
            lamount: "",
            lamount_term: "",
            fname: "",
            lname: "",
            email: "",
            phone: "",
            martial_state: "",
            number_of_dependants: "",
            education: "",
            address: "",
            country: "",
            city: "",
            property_area: "",
            employment_status: "",
            employment_industry: "",
            employer_name: "",
            month_income: "",
            gender: "Male",
            credit_history: "",
            captcha: "",


            red_alert_lamount: false,
            red_alert_lamount_term: false,
            red_alert_fname: false,
            red_alert_lname: false,
            red_alert_email: false,
            red_alert_phone: false,
            red_alert_martial_state: false,
            red_alert_number_of_dependants: false,
            red_alert_education: false,
            red_alert_address: false,
            red_alert_country: false,
            red_alert_city: false,
            red_alert_property_area: false,
            red_alert_employment_status: false,
            red_alert_employment_industry: false,
            red_alert_employer_name: false,
            red_alert_month_income: false,
            red_alert_credit_history: false,
        };
    }

    componentDidMount = async () => {

        if (Object.keys(this.context.userdata).length === 0) {
            await this.context.getData()
        }

    } // eslint-disable-line react-hooks/exhaustive-deps
    onChangeGoogleReCaptcha = async (value) => {

        await this.setState({
            captcha: value
        })
    }

    showAlert(loanStatus) {
        // e.preventDefault();
        if (loanStatus === true) {
            this.setState({
                alert: (
                    <SweetAlert
                        success
                        // showCancel
                        cancelBtnBsStyle="light"
                        title="Congratulations!"
                        onConfirm={this.hideAlert}
                        onCancel={this.hideAlert}>
                        Your loan is approved!
                    </SweetAlert>
                )
            });
        }
        if (loanStatus === false) {
            this.setState({
                alert: (
                    <SweetAlert
                        danger
                        // showCancel
                        cancelBtnBsStyle="light"
                        title="Sorry!"
                        onConfirm={this.hideAlert}
                        onCancel={this.hideAlert}>
                        Your loan amount can't be approved!
                    </SweetAlert>
                )
            });
        }
    }
    hideAlert = () => {
        this.setState({
            alert: false
        });
        window.location.reload()
    }
    calender = (value) => {
        this.setState({
            dob: value
        });
    }
    formSubmission = (e) => {
        var name = e.target.name
        var value = e.target.value

        // console.log(value)
        const regex = /^[ A-Za-z0-9_@./#&:+-]*$/
        const numregex = /^[0-9]*$/


        // console.log(name)
        if (name === "lamount") {
            if (!numregex.test(value)) {
                this.setState({
                    red_alert_lamount: true
                });
            }
            else {
                this.setState({
                    red_alert_lamount: false
                });
            }
            this.setState({
                lamount: value
            });
        }
        if (name === "lamount_term") {
            if (!numregex.test(value)) {
                this.setState({
                    red_alert_lamount_term: true
                });
            }
            else {
                this.setState({
                    red_alert_lamount_term: false
                });
            }
            this.setState({
                lamount_term: value
            });
        }
        if (name === "fname") {
            if (!regex.test(value)) {
                this.setState({
                    red_alert_fname: true
                });
            }
            else {
                this.setState({
                    red_alert_fname: false
                });
            }
            this.setState({
                fname: value
            });
        }
        if (name === "lname") {
            if (!regex.test(value)) {
                this.setState({
                    red_alert_lname: true
                });
            }
            else {
                this.setState({
                    red_alert_lname: false
                });
            }
            this.setState({
                lname: value
            });
        }
        if (name === "email") {
            if (!regex.test(value)) {
                this.setState({
                    red_alert_email: true
                });
            }
            else {
                this.setState({
                    red_alert_email: false
                });
            }
            this.setState({
                email: value
            });
        }
        if (name === "phone") {
            if (!numregex.test(value)) {
                this.setState({
                    red_alert_phone: true
                });
            }
            else {
                this.setState({
                    red_alert_phone: false
                });
            }
            this.setState({
                phone: value
            });
        }
        if (name === "martial_state") {
            if (value === "Choose here") {
                this.setState({
                    red_alert_martial_state: true
                });
            }
            else {
                this.setState({
                    red_alert_martial_state: false
                });
            }
            this.setState({
                martial_state: value
            });
        }
        if (name === "number_of_dependants") {
            if (value === "Choose here") {
                this.setState({
                    red_alert_number_of_dependants: true
                });
            }
            else {
                this.setState({
                    red_alert_number_of_dependants: false
                });
            }
            this.setState({
                number_of_dependants: value
            });
        }
        if (name === "education") {
            if (value === "Choose here") {
                this.setState({
                    red_alert_education: true
                });
            }
            else {
                this.setState({
                    red_alert_education: false
                });
            }
            this.setState({
                education: value
            });
        }
        if (name === "address") {
            if (!regex.test(value)) {
                this.setState({
                    red_alert_address: true
                });
            }
            else {
                this.setState({
                    red_alert_address: false
                });
            }
            this.setState({
                address: value
            });
        }
        if (name === "country") {
            if (!regex.test(value)) {
                this.setState({
                    red_alert_country: true
                });
            }
            else {
                this.setState({
                    red_alert_country: false
                });
            }
            this.setState({
                country: value
            });
        }
        if (name === "city") {
            if (!regex.test(value)) {
                this.setState({
                    red_alert_city: true
                });
            }
            else {
                this.setState({
                    red_alert_city: false
                });
            }
            this.setState({
                city: value
            });
        }
        if (name === "property_area") {
            if (value === "Choose here") {
                this.setState({
                    red_alert_property_area: true
                });
            }
            else {
                this.setState({
                    red_alert_property_area: false
                });
            }
            this.setState({
                property_area: value
            });
        }
        if (name === "employment_status") {
            if (value === "Choose here") {
                this.setState({
                    red_alert_employment_status: true
                });
            }
            else {
                this.setState({
                    red_alert_employment_status: false
                });
            }
            this.setState({
                employment_status: value
            });
        }
        if (name === "employment_industry") {
            if (!regex.test(value)) {
                this.setState({
                    red_alert_employment_industry: true
                });
            }
            else {
                this.setState({
                    red_alert_employment_industry: false
                });
            }
            this.setState({
                employment_industry: value
            });
        }
        if (name === "employer_name") {
            if (!regex.test(value)) {
                this.setState({
                    red_alert_employer_name: true
                });
            }
            else {
                this.setState({
                    red_alert_employer_name: false
                });
            }
            this.setState({
                employer_name: value
            });
        }
        if (name === "month_income") {
            if (!numregex.test(value)) {
                this.setState({
                    red_alert_month_income: true
                });
            }
            else {
                this.setState({
                    red_alert_month_income: false
                });
            }
            this.setState({
                month_income: value
            });
        }
        if (name === "gender") {
            this.setState({
                gender: value
            });
        }
        if (name === "credit_history") {
            if (value === "Choose here") {
                this.setState({
                    red_alert_credit_history: true
                });
            }
            else {
                this.setState({
                    red_alert_credit_history: false
                });
            }
            this.setState({
                credit_history: value
            });
        }
    }
    applyloan = async () => {
        // const url = "http://127.0.0.1:9000/api/loan/register";
        const url = "https://hritwij.com/api/loan/register";
        const lamount = this.state.lamount;
        const lamount_term = this.state.lamount_term;
        const fname = this.state.fname;
        const lname = this.state.lname;
        const email = this.state.email;
        const phone = this.state.phone;
        const dob = this.state.dob;
        const martial_state = this.state.martial_state;
        const number_of_dependants = this.state.number_of_dependants;
        const education = this.state.education;
        const address = this.state.address;
        const country = this.state.country;
        const city = this.state.city;
        const property_area = this.state.property_area;
        const employment_status = this.state.employment_status;
        const employment_industry = this.state.employment_industry;
        const employer_name = this.state.employer_name;
        const month_income = this.state.month_income;
        const gender = this.state.gender;
        const credit_history = this.state.credit_history;
        const captcha = this.state.captcha;
        let urlip = 'https://api.ipify.org?format=json'
        let ip

        if (this.state.red_alert_lamount || this.state.red_alert_lamount_term || this.state.red_alert_fname || this.state.red_alert_lname || this.state.red_alert_email || this.state.red_alert_phone || this.state.red_alert_martial_state || this.state.red_alert_number_of_dependants || this.state.red_alert_education || this.state.red_alert_address || this.state.red_alert_country || this.state.red_alert_city || this.state.red_alert_property_area || this.state.red_alert_employment_status || this.state.red_alert_employment_industry || this.state.red_alert_employer_name || this.state.red_alert_month_income || this.state.red_alert_credit_history) {
            alert("Please fill all values correctly!")
        }
        else {
            if ((Boolean(dob)) && (Boolean(lamount)) && (Boolean(lamount_term)) && (Boolean(fname)) && (Boolean(lname)) && (Boolean(email)) && (Boolean(phone)) && (Boolean(dob)) && (Boolean(martial_state)) && (Boolean(number_of_dependants)) && (Boolean(education)) && (Boolean(address)) && (Boolean(country)) && (Boolean(city)) && (Boolean(property_area)) && (Boolean(employment_status)) && (Boolean(employment_industry)) && (Boolean(employer_name)) && (Boolean(month_income)) && (Boolean(gender)) && (Boolean(credit_history))) {
                await fetch(urlip).then(res => res.json())
                    .then(out => {
                        ip = out.ip;

                    })
                const response = await fetch(url, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'post',
                    body: JSON.stringify({
                        lamount,
                        lamount_term,
                        fname,
                        lname,
                        email,
                        phone,
                        dob,
                        martial_state,
                        number_of_dependants,
                        education,
                        address,
                        country,
                        city,
                        property_area,
                        employment_status,
                        employment_industry,
                        employer_name,
                        month_income,
                        gender,
                        credit_history,
                        captcha,
                        ip
                    })
                });

                var sres = await response.json()
                if (!sres['error']) {
                    if (sres['status'] === 'Approved') {
                        this.showAlert(true)
                    }
                    if (sres['status'] === 'Rejected') {
                        this.showAlert(false)
                    }

                }
                else {
                    alert("Please fill all values correctly")
                }
            }
            
            else{
                alert("Please fill all empty fields")
            }
        }

    }

    render() {
        return (
            <>
                <Helmet>
                    <link rel="canonical" href="https://hritwij.com/loan/" />
                </Helmet>
                {this.state.alert}
                <div className="firstcontainer" style={{ background: "#F6F6F6", paddingTop: "0.02px" }}>
                    <div style={{ background: "#F6F6F6", paddingTop: "50px" }}>
                        <section className="section-padding contact-us-padding">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 col-lg-10">
                                        <form>
                                            <div className="row list-input">
                                                <div className="col-md-6 mr0">
                                                    <div className="single-get-touch">
                                                        <input type="text" name="lamount" className={this.state.red_alert_lamount ? "red_alert" : ""} placeholder="LOAN AMOUNT (₹) *" required="" onChange={(e) => { this.formSubmission(e) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-get-touch">
                                                        <input type="text" name="lamount_term" className={this.state.red_alert_lamount_term ? "red_alert" : ""} placeholder="LOAN PERIOD (MONTHS)" required="" onChange={(e) => { this.formSubmission(e) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mr0">
                                                    <div className="single-get-touch">
                                                        <input type="text" name="fname" className={this.state.red_alert_fname ? "red_alert" : ""} placeholder="First Name" required="" onChange={(e) => { this.formSubmission(e) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-get-touch">
                                                        <input type="text" name="lname" className={this.state.red_alert_lname ? "red_alert" : ""} placeholder="Last Name" required="" onChange={(e) => { this.formSubmission(e) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mr0">
                                                    <div className="single-get-touch">
                                                        <input type="email" name="email" className={this.state.red_alert_email ? "red_alert" : ""} placeholder="Email" required="" onChange={(e) => { this.formSubmission(e) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-get-touch">
                                                        <input type="text" name="phone" className={this.state.red_alert_phone ? "red_alert" : ""} placeholder="Phone" required="" onChange={(e) => { this.formSubmission(e) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mr0">
                                                    <div className="single-get-touch">
                                                        <DatePicker format="dd / MM / yyyy" name="dob" value={this.state.dob} onChange={(value) => { this.calender(value) }} className="input" />


                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-get-touch">
                                                        <select name="martial_state" className={this.state.red_alert_martial_state ? "red_alert" : ""} required="" onChange={(e) => { this.formSubmission(e) }}>
                                                            <option value="Choose here">MARITAL STATUS *</option>
                                                            <option value="Married">Married</option>
                                                            <option value="Single">Single</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mr0">
                                                    <div className="single-get-touch">
                                                        <select name="number_of_dependants" className={this.state.red_alert_number_of_dependants ? "red_alert" : ""} required="" onChange={(e) => { this.formSubmission(e) }}>
                                                            <option value="Choose here">NUMBER OF DEPENDANTS *</option>
                                                            <option value="0">0 Dependants</option>
                                                            <option value="1">1 Dependants</option>
                                                            <option value="2">2 Dependants</option>
                                                            <option value="3+">3+ Dependants</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <   div className="single-get-touch">
                                                        <select name="education" className={this.state.red_alert_education ? "red_alert" : ""} required="" onChange={(e) => { this.formSubmission(e) }}>
                                                            <option value="Choose here">Education *</option>
                                                            <option value="Graduate">Graduate</option>
                                                            <option value="Not Graduate">Not Graduate</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mr0">
                                                    <div className="single-get-touch">
                                                        <input type="text" name="address" className={this.state.red_alert_address ? "red_alert" : ""} placeholder="ADDRESS *" required="" onChange={(e) => { this.formSubmission(e) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-get-touch">
                                                        <input type="text" name="country" className={this.state.red_alert_country ? "red_alert" : ""} placeholder="Country" required="" onChange={(e) => { this.formSubmission(e) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mr0">
                                                    <div className="single-get-touch">
                                                        <input type="text" name="city" className={this.state.red_alert_city ? "red_alert" : ""} placeholder="TOWN/CITY *" required="" onChange={(e) => { this.formSubmission(e) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-get-touch">
                                                        <select name="property_area" className={this.state.red_alert_property_area ? "red_alert" : ""} required="" onChange={(e) => { this.formSubmission(e) }}>
                                                            <option value="Choose here">Property Area *</option>
                                                            <option value="Urban">Urban</option>
                                                            <option value="Rural">Rural</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mr0">
                                                    <div className="single-get-touch">
                                                        <select name="employment_status" className={this.state.red_alert_employment_status ? "red_alert" : ""} required="" onChange={(e) => { this.formSubmission(e) }}>
                                                            <option value="Choose Here">EMPLOYMENT TYPE</option>
                                                            <option value="Full Time Employed ">Full Time Employed </option>
                                                            <option value="Part Time Employed ">Part Time Employed </option>
                                                            <option value="Self Employed ">Self Employed </option>
                                                            <option value="Temporarily  Employed ">Temporarily Employed </option>
                                                            <option value="Student ">Student </option>
                                                            <option value="Pension">Pension</option>
                                                            <option value="Disability">Disability</option>
                                                            <option value="Unemployed ">Unemployed </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="single-get-touch">
                                                        <input type="text" name="employment_industry" className={this.state.red_alert_employment_industry ? "red_alert" : ""} placeholder="EMPLOYMENT INDUSTRY *" required="" onChange={(e) => { this.formSubmission(e) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mr0">
                                                    <div className="single-get-touch">
                                                        <input type="text" name="employer_name" className={this.state.red_alert_employer_name ? "red_alert" : ""} placeholder="EMPLOYER NAME *" required="" onChange={(e) => { this.formSubmission(e) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-get-touch">
                                                        <input type="text" name="month_income" className={this.state.red_alert_month_income ? "red_alert" : ""} placeholder="MONTHLY INCOME (₹) *" required="" onChange={(e) => { this.formSubmission(e) }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-get-touch">
                                                        <select name="credit_history" className={this.state.red_alert_credit_history ? "red_alert" : ""} required="" onChange={(e) => { this.formSubmission(e) }}>
                                                            <option value="Choose here">Any Credit History *</option>
                                                            <option value="1.0">Yes</option>
                                                            <option value="0.0">No</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mr0">
                                                    <div className="single-get-check">
                                                        <label className="radiobox"> Male
                                                            <input type="radio" defaultChecked={true} name="gender" value="Male" onChange={(e) => { this.formSubmission(e) }} />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                        <label className="radiobox">Female
                                                            <input type="radio" name="gender" value="Female" onChange={(e) => { this.formSubmission(e) }} />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-get-touch">
                                                        <div className="input" style={{ paddingLeft: "0px", background: "transparent" }}>
                                                            <div className="captcha">
                                                                <ReCAPTCHA sitekey="6LcdzGAgAAAAAD_PjYG4-lz-nT84kBqpgz9kq7Vj" onChange={this.onChangeGoogleReCaptcha} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="single-get-touch">
                                                        <button type="button" onClick={(e) => { this.applyloan(e) }} name="submit" className="btn btn-success btn-sm">Apply
                                                            Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </>
        )
    }
}