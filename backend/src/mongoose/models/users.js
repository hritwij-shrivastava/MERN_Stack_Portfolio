const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({

    name:  {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true,
        unique: true
    },
    password:  {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },    
    frontPage:{
        type: Object
    },
    bg:{
        type: Object
    },
    skills:{
        type: Object
    },
    services: {
        type: Object
    },
    certificate: {
        type: Object
    },
    resume: {
        type: Object
    },
    date:  {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model('users', usersSchema)