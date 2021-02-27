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

//Express related stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//pug related stuff
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug')//set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //set the views directory

//Endpoints
app.get('/home', (req, res)=>{
    const params = {};
    res.status(200).render('base.pug', params)
})
app.get('/login', (req, res)=>{
    const params = {};
    res.status(200).render('login.pug', params);
})
app.get('/signup', (req, res)=>{
    const params = {};
    res.status(200).render('signup.pug', params);
})

app.post('/signup',(req, res)=>{
    var SUInfo = new SUInformation(req.body)
    SUInfo.save().then(()=>{
        res.send("your Sign information has been submitted! go to the Login page now");
    }).catch(()=>{
        res.status(400).send("Please Try Again Later")
    })
})


//server
app.listen(port, ()=>{
    console.log(`this is working on the port no ${port}`)
})