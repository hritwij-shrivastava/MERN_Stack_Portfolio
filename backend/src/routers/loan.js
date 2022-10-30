const express = require("express");
const router = express.Router()
const {Client} = require("pg");
const axios = require('axios');
const dotenv = require('dotenv').config();
const FormData = require("form-data");

const client = new Client({
    host: process.env.HOST,
    user: process.env.PGUSER,
    port: process.env.PORT,
    password: process.env.PGPASSWORD,
    database: process.env.DATABASE
})
client.connect();

function convertValidObject(lamount,
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
    credit_history,
    gender
    ) {
        const valid = /[^ A-Za-z0-9_@./#&:+-,]/g
        return(
        lamount.replace(valid, " "),
        lamount_term.replace(valid, " "),                                           
        fname.replace(valid, " "),                                         
        lname.replace(valid, " "),
        email.replace(valid, " "),
        phone.replace(valid, " "),
        dob.replace(valid, " "),
        martial_state.replace(valid, " "),
        number_of_dependants.replace(valid, " "),
        education.replace(valid, " "),
        address.replace(valid, " "),
        country.replace(valid, " "),
        city.replace(valid, " "),
        property_area.replace(valid, " "),
        employment_status.replace(valid, " "),
        employment_industry.replace(valid, " "),
        employer_name.replace(valid, " "),
        month_income.replace(valid, " "),
        credit_history.replace(valid, " "),
        gender.replace(valid, " ")
        );
}

// Router to Register
router.post("/register", async(req, res) => {
    try {
        const SECRET_KEY = process.env.SECRET_KEY_FOR_GOOGLE
        let response
        var {
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
            } = req.body

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
                credit_history=convertValidObject(lamount,
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
                credit_history
                )
        // console.log(ip)
        await axios({
            url: process.env.GOOGLE_API_URL,
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: `secret=${SECRET_KEY}&response=${captcha}&remoteip=${ip}`,
        }).then((google_response) => { response = google_response.data.success})

        if (response) {
           
            // const regex = /^[ A-Za-z0-9_@./#&:+-]*$/
        
            if
            ( 
                // regex.test(lamount) && 
                // regex.test(lamount_term) &&                                      
                // regex.test(fname) &&                               
                // regex.test(lname) && 
                // regex.test(email) && 
                // regex.test(phone) && 
                // regex.test(dob) && 
                // regex.test(martial_state) && 
                // regex.test(number_of_dependants) && 
                // regex.test(education) && 
                // regex.test(address) && 
                // regex.test(country) && 
                // regex.test(city) && 
                // regex.test(property_area) && 
                // regex.test(employment_status) && 
                // regex.test(employment_industry) && 
                // regex.test(employer_name) && 
                // regex.test(month_income) && 
                // regex.test(gender) &&
    
                (Boolean(dob)) && 
                (Boolean(lamount)) && 
                (Boolean(lamount_term)) &&                                      
                (Boolean(fname)) &&                               
                (Boolean(lname)) && 
                (Boolean(email)) && 
                (Boolean(phone)) && 
                (Boolean(dob)) && 
                (Boolean(martial_state)) && 
                (Boolean(number_of_dependants)) && 
                (Boolean(education)) && 
                (Boolean(address)) && 
                (Boolean(country)) && 
                (Boolean(city)) && 
                (Boolean(property_area)) && 
                (Boolean(employment_status)) && 
                (Boolean(employment_industry)) && 
                (Boolean(employer_name)) && 
                (Boolean(month_income)) && 
                (Boolean(gender)) &&
                (Boolean(credit_history))      
            ){
        
                var sql = "INSERT INTO users (lamount,lamount_term,fname,lname,email,phone,dob,martial_state,number_of_dependants,education,address,country,city,property_area,employment_status,employment_industry,employer_name,month_income,gender,credit_history) VALUES ('"+lamount+"','"+lamount_term+"','"+fname+"','"+lname+"','"+email+"','"+phone+"','"+dob+"','"+martial_state+"','"+number_of_dependants+"','"+education+"','"+address+"','"+country+"','"+city+"','"+property_area+"','"+employment_status+"','"+employment_industry+"','"+employer_name+"','"+month_income+"','"+gender+"','"+credit_history+"')";
                // console.log("good")
                client.query(sql,(err,res)=>{
                    // if(!err){
                    //     console.log(res.rows);
                    // }
                    // else{
                    //     console.log(err.message);
                    // }
                    client.end;
                })
                let data
                const form = new FormData();
                form.append("lamount",lamount);
                form.append("lamount_term",lamount_term);
                form.append("number_of_dependants",number_of_dependants);
                form.append("property_area",property_area);
                form.append("month_income",month_income);
                form.append("Gender", gender);
                form.append("Married", martial_state);
                form.append("Education", education);
                form.append("Self_Employed", employment_status);
                form.append("Credit_History", credit_history);

                await axios({
                    // url: process.env.FLASK_TEST_API_URL,
                    url: process.env.FLASK_API_URL,
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    data: form,
                }).then((flask_res) => {data = flask_res.data})
                
                // console.log("Check")
                // console.log(data)
                // console.log(data['Loan_Status'])

                if(data['Loan_Status']===1){
                    return res.status(200).json({ status: "Approved" ,lamount,lamount_term,fname,lname,email,phone,dob,martial_state,number_of_dependants,education,address,country,city,property_area,employment_status,employment_industry,employer_name,month_income,gender });
                }
                if(data['Loan_Status']===0){
                    return res.status(200).json({ status: "Rejected" ,lamount,lamount_term,fname,lname,email,phone,dob,martial_state,number_of_dependants,education,address,country,city,property_area,employment_status,employment_industry,employer_name,month_income,gender });
                }


                // return res.status(200).json({ status: "Approved" });
            
            }
            else{
                // console.log("bad")
                return res.status(200).json({status: "Rejected" ,lamount,lamount_term,fname,lname,email,phone,dob,martial_state,number_of_dependants,education,address,country,city,property_area,employment_status,employment_industry,employer_name,month_income,gender})            
                // return res.status(200).json({status: "Rejected" })            
            }
        }
        else {
            // return res.status(400).json({ error: response });
            return res.status(400).json({ error: "Invalid Captcha" });
        }

        
    }
    catch (error) {
        // console.error(error.message)
        return res.status(500).json({ error: "some error occured" });
    }
});

// Router to Register
// router.post("/test", async(req, res) => {
//     try {
//         let data
//         const form = new FormData();
//         form.append("Gender", 'It worked');
//         form.append("Married", 'It worked');
//         form.append("Education", 'It worked');
//         form.append("Self_Employed", 'It worked');
//         form.append("Credit_History", 'It worked');

//         await axios({
//             url: 'http://127.0.0.1:8000/api/loan_approval',
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             data: form,
//         }).then((flask_res) => {data = flask_res.data})

        
//         return res.status(200).json({ good: data });
        

        
//     }
//     catch (error) {
//         // console.error(error.message)
//         return res.status(500).json({ error: "some error occured" });
//     }
// });



module.exports = router