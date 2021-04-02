const mangoose  = require('mongoose');
const bodyparser = require('body-parser');
const signupfunc = require("../models/signup")
const router = require("../router")


//creating a database in mangoose
mangoose.connect('mongodb://localhost/OnlineNurseryOne', {useNewUrlParser: true, useUnifiedTopology: true});


//creating the schema for the signup information
var SignUpSchema = new mangoose.Schema({
    Name : String,
    Email : String,
    Password : String,
    Address : String,
    PhoneNo : Number
});
var SUInformation = mangoose.model('SignUpInfo', SignUpSchema);

//Define Mangoose schema in login form
const LoginSchema = new mangoose.Schema({
    email: String,
    pass : String
});
const LgInformation = mangoose.model('LoginInfo', LoginSchema);
