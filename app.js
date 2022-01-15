const express= require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config()
const homeRoute = require('./routes/route')
var methodOverride = require('method-override')

//method override

app.use(methodOverride('_method'))
//body-parse

app.use(express.json())
app.use(express.urlencoded())



//DB setup

mongoose.connect(process.env.DB_ACCESS)
const connection = mongoose.connection



//view engine set up

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')




//routes
app.use('/', homeRoute)


connection.once('open', ()=>{
    console.log("DB running OK")
})



app.listen(process.env.PORT||3000, ()=>{
    console.log("Server running")
})
