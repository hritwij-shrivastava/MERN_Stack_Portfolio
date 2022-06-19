const express = require('express')
const path = require("path")
var cors = require('cors')

const connectToMongo = require('./mongoose/db/mongoose');
const bodyParser = require("body-parser");
const passport = require("passport");

connectToMongo();

const app = express();
app.use(cors())

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./passport")(passport);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE");
        return res.status(200).json({});
    }
    next();
});

app.use(express.json());
app.use('/api/blog', require('./routers/blog'))
app.use('/api/users', require('./routers/user'))

app.use(express.static(path.resolve(__dirname,'frontend')))
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','index.html'));
})
module.exports = app;