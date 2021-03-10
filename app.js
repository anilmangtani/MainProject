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
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//pug related stuff
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug')//set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //set the views directory

//Endpoints
app.get('/', (req, res)=>{
    const params = {};
    res.status(200).render('Home.pug', params)
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
       // res.render('base.pug');
    }).catch(()=>{
        res.send("some error has occured sorry");
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
        //res.send("your Sign information has been submitted! go to the Login page now");
    }).catch(()=>{
        res.status(400).send("Please Try Again Later")
    })
})

//getting the endpoints of the chatting page
app.get('/chatting', (req, res)=>{
    var params = {};
    res.render('chatting.pug', params);
});

//server
app.listen(port, ()=>{
    console.log(`this is working on the port no ${port}`)
})