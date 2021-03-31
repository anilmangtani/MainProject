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


//creating the controller for the login page
exports.renderLoginPage = (req, res)=>{
    const params = {};
    res.status(200).render('../views/login.pug',params);
}

exports.renderLoginInfo =  (req, res)=>{
    var LoInfo = new LgInformation(req.body)
    LoInfo.save().then(()=>{
       res.send("Login Done!!");
       console.log(req.body);
       //res.render('home.pug');
    }).catch((error)=>{
        res.send("Some Error has occured! Sorry");
    }) 
}

//creating the controller for the home page
exports.renderHomePage = (req,res)=>{
    const params = {};
    res.render('../views/home.pug',params);
}

//creating the controller for the signup page


exports.renderSignUpPage = (req, res)=>{
    const params = {};
    res.status(200).render('signup.pug', params);   
}

//for getting values in database
exports.renderSignUpInfo = (req,res)=>{

    var SUInfo = new SUInformation(req.body)
    SUInfo.save().then(()=>{
        res.send("your Sign information has been submitted! go to the Login page now");
    }).catch(()=>{
        res.status(400).send("Please Try Again Later")
    })
    
}






//creating the controller for the plants
exports.renderPlantsPage = (req, res)=>{
    var params = {};
    res.render('plants.pug',params);
}
//creating the controller for the vegetables
exports.renderVegPage = (req,res)=>{
    const params ={};
    res.render('vegetable.pug',params);
}
//creating the controller for the fruits
exports.renderFruitPage = (req,res)=>{
    const params = {};
    res.render('fruits.pug', params);
}
//creating the controller for the gift items
exports.renderGiftPage = (req,res)=>{
    const params={};
    res.render('gift.pug',params);
}
//creting the controller for the planters
exports.renderPlanterPage = (req,res)=>{
    const params={};
    res.render('planter.pug');
}
//creating the controller for the care items
exports.renderCarePage =  (req,res)=>{
    const params={};
    res.render('care.pug');
}
//creating the controller for the information items
exports.renderInfoPage = (req,res)=>{
    const params ={};
    res.render('howto.pug',params);
}

//creating the controller for the how to take care of plants page
exports.renderHowToTakeCare = (req,res)=>{
    const params ={};
    res.render('takeCarePlant.pug',params);  
}

//creating the controller for the beginner Guide
exports.renderBeginnerGuide = (req,res)=>{
    const params ={};
    res.render('beginnerGuide.pug',params);  
}
//creating the controller for the how-to-grow-plants-from-seeds
exports.renderPlantsFromSeeds = (req,res)=>{
    const params ={};
    res.render('GrowFromSeeds.pug',params);  
}

//creating the controller for the buy item 
exports.renderBuyItem = (req,res)=>{
    const params = {};
    res.render('buyitem.pug',params);
}

//creating the controller for the chatting 
exports.renderChatting =  (req, res)=>{
    const params = {};
    res.render('chatting.pug', params);
}
