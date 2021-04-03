const mongoose  = require('mongoose');
const Schema = mongoose.Schema
const bodyparser = require('body-parser');
const signupfunc = require("../models/signup")
const router = require("../../routes/router")


//creating a database in mangoose
mangoose.connect('mongodb://localhost/OnlineNursery', {useNewUrlParser: true, useUnifiedTopology: true});


//creating the schema for the signup information
const SignUpSchema = new Schema({
    Name : {type: String, required: true},
    Email : {type: String, required: true},
    Password : {type: String, required: true},
    Address : {type: String, required: true},
    PhoneNo : {type: Number, required: true}
});
const SUInformation = mongoose.model('SignUpInfo', SignUpSchema);

module.exports = SUInformation;

//Define Mangoose schema in login form
const LoginSchema = new Schema({
    email: {type: String, required: true},
    pass : {type: String, required: true}
});
const LgInformation = mongoose.model('LoginInfo', LoginSchema);

module.exports = LgInformation; 

//creating the schema for add to plants
const Schema = mongoose.Schema;

new Schema({

})