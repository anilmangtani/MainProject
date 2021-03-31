const express = require('express');
const mangoose = require('mongoose');
const fs = require('fs');
const app = express();
const port = 80;
const path =  require('path');
const router = require("./router");


app.use(express.urlencoded({extended: false}))
app.use(express.json())



//Express related stuff
app.use('/static', express.static('public/static'));
app.use(express.urlencoded());
app.use(express.json())


//pug related stuff
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug')//set the template engine as pug
app.set('../views', path.join(__dirname, 'views')) //set the views directory


app.use('/',router)



//server
app.listen(port, ()=>{
    console.log(`this is working on the port no ${port}`)
})