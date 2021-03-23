const express = require('express');
const app = express();
const port = 80;
const path =  require('path');
const fs = require('fs');
const mangoose = require('mongoose');



//creating a database in mangoose
mangoose.connect('mongodb://localhost/OnlineNursery', {useNewUrlParser: true, useUnifiedTopology: true});

//Define Mangoose Schema for sign up form
const SignUpSchema = new mangoose.Schema({
    Name : String,
    Email : String,
    Password : String,
    Address : String,
    PhoneNo : Number
});

const SUInformation = mangoose.model('SignUpInfo', SignUpSchema);

//Define Mangoose schema in login form
const LoginSchema = new mangoose.Schema({
    email: String,
    pass : String
})

const LgInformation = mangoose.model('LoginInfo', LoginSchema);


//Express related stuff
app.use('/static', express.static('public/static'));
app.use(express.urlencoded());

//pug related stuff
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug')//set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //set the views directory

//Endpoints
app.get('/', (req, res)=>{
    const params = {};
    res.status(200).render('base.pug', params)
})
//endpoint for the home page
app.get('/home',(req, res)=>{
    const params = {};
    res.status(200).render('home.pug', params)
})
//getting the login information
app.get('/login', (req, res)=>{
    const params = {};
    res.status(200).render('login.pug', params);
})
app.post('/login', (req, res)=>{
    var LoInfo = new LgInformation(req.body)
    LoInfo.save().then(()=>{
       res.send("Login Done!!"); 
       //res.render('home.pug');
    }).catch((error)=>{
        res.send("Some Error has occured! Sorry");
    }) 
})
//getting the sign up information
app.get('/signup', (req, res)=>{
    const params = {};
    res.status(200).render('signup.pug', params);
})

app.post('/signup',(req, res)=>{
    var SUInfo = new SUInformation(req.body)
    const params = {}
    SUInfo.save().then(()=>{
        //res.render('login.pug', params);
        res.send("your Sign information has been submitted! go to the Login page now");
    }).catch(()=>{
        res.status(400).send("Please Try Again Later")
    })
})

//getting the endpoints of the chatting page
app.get('/chatting', (req, res)=>{
    const params = {};
    res.render('chatting.pug', params);
});

//getting the endpoint of the plants page
app.get('/plants',(req, res)=>{
    var params = {};
    res.render('plants.pug',params);
});
//getting the endpoint of the vegetable points
app.get('/vegetable',(req,res)=>{
    const params ={};
    res.render('vegetable.pug',params);
});
//getting the endpoint of the fruits
app.get('/fruit', (req,res)=>{
    const params = {};
    res.render('fruits.pug', params);
});
//getting the endpoint of the gift items 
app.get('/gift',(req,res)=>{
    const params={};
    res.render('gift.pug',params);
});
//getting the endpoint of the planter items
app.get('/planter',(req,res)=>{
    const params={};
    res.render('planter.pug');
});
//getting the endpoint of the care items
app.get('/care-and-decor',(req,res)=>{
    const params={};
    res.render('care.pug');
});
//getting end points of the information item
app.get('/information',(req,res)=>{
    const params ={};
    res.render('howto.pug',params);
});
//getting end point of the take care of plants page
app.get('/how-to-take-care-of-plants',(req,res)=>{
    const params ={};
    res.render('takeCarePlant.pug',params);  
});
//getting end point of the beginer guide of the plant page
app.get('/beginner-guide',(req,res)=>{
    const params ={};
    res.render('beginnerGuide.pug',params);  
});
//Getting end point of thw how to grow plants from seeds page
app.get('/how-to-grow-plants-from-seeds',(req,res)=>{
    const params ={};
    res.render('GrowFromSeeds.pug',params);  
});
//server
app.listen(port, ()=>{
    console.log(`this is working on the port no ${port}`)
})