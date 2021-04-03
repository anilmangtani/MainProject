const mangoose  = require('mongoose');
const bodyparser = require('body-parser');
const signupfunc = require("../models/signup")
const router = require("../../routes/router")
//const SignUpSchema = require("../models/modelDb")
//const LoginSchema = require("../models/modelDb")
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
    res.render('productInfo.pug',{
        img: '../static/images/care/transplatingTrowel.jpg',
        name :'TransplantingTrowel',
        rating: "4.5/5",
        price: "Rs.160",
        Avail: "Yes"
        
    });
}
//creating the controller for the Plastic Hand Trowel
exports.renderPlasticHndTrwl = (req,res)=>{
    res.render('productInfo.pug',{
        img: '../static/images/care/transimg2.jpg',
        name :'Plastic Hand Trowel',
        rating: "5/5",
        price: "Rs.200",
        Avail: "Yes"
    })
}
//creating the controller for the  Plastic Hand Fork
exports.renderPlasticHndFork = (req,res)=>{
    res.render('productInfo.pug',{
        img: '../static/images/care/plastichandfork.jpg',
        name :'Plastic Hand Fork',
        rating: "5/5",
        price: "Rs.200",
        Avail: "Yes"
    })
}
//creating the controller for the Plastic Hand Cultivator
exports.renderPlasticHndCultivator = (req,res)=>{
    res.render('productInfo.pug',{
        img: '../static/images/care/plastichandcultivator.jpg',
        name :'Plastic Hand Cultivator',
        rating: "5/5",
        price: "Rs.200",
        Avail: "Yes"
    })
}
//creating the controller for the hedge shear
exports.renderHedgeShear = (req,res)=>{
    res.render('productInfo.pug',{
        img: '../static/images/care/hedgeshear.jpg',
        name :'Hedge Shear',
        rating: "5/5",
        price: "Rs.200",
        Avail: "Yes"
    })
}
//creating the controller for the water can
exports.renderWaterCan = (req,res)=>{
    res.render('productInfo.pug',{
        img: '../static/images/care/watercan.jpg',
        name :'Water Can',
        rating: "5/5",
        price: "Rs.150",
        Avail: "Yes"
    })
}
//creating the controller for the bonsai set
exports.renderBonsaiSet = (req,res)=>{
    res.render('productInfo.pug',{
        img: '../static/images/care/bonsaiset.jpg',
        name :'Bonsai set',
        rating: "4.5/5",
        price: "Rs.500",
        Avail: "Yes"
    })
}
//creating the controller for the Three prong Hand set
exports.renderThreeProngHS = (req,res)=>{
    res.render('productInfo.pug',{
        img: '../static/images/care/Threeproghand.jpg',
        name :'Three Prong Hand Set',
        rating: "5/5",
        price: "Rs.450",
        Avail: "Yes"
    })
}
//creating the controller for the Fertilizer - Sterameal
exports.renderFertSterameal = (req,res)=>{
    res.render('productInfo.pug',{
        img: '../static/images/care/Fertsterameal.jpg',
        name :'Sterameal Fertilizer',
        rating: "5/5",
        price: "Rs.80/Kg",
        Avail: "Yes"
    })
}
//creating the controller for the Fertilizer - Cocopeat
exports.renderFertCocopeat = (req,res)=>{
    res.render('productInfo.pug',{
        img: '../static/images/care/Fertcocopeat.jpg',
        name: 'Cocopeat Fertilizer',
        rating : '4.5/5',
        price: "Rs.70/kg",
        Avail:"Yes"

    })
}
//creating the controller for the Fertilizer - Exfoliated
exports.renderFertExfoiled = (req,res)=>{
    res.render('productInfo.pug',{
        img: '../static/images/care/Fertexfoliated.jpg',
        name: 'Exfoliated Fertilizer',
        rating : '4.5/5',
        price: "Rs.80/kg",
        Avail:"Yes"

    })
}
//creating the controller for the Fertilizer - Jeevamrut
exports.renderFertJeevamrut = (req,res)=>{
    res.render('productInfo.pug',{
        img: '../static/images/care/Fertjeevamrut.jpg',
        name: 'Jeevamrut Fertilizer',
        rating : '5/5',
        price: "Rs.80 per bottle",
        Avail:"Yes"

    })
}  
//creating the controller for the chatting 
exports.renderChatting =  (req, res)=>{
    const params = {};
    res.render('chatting.pug', params);
}
