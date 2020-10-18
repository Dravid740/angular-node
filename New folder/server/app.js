const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const connectDB = require('./config/database')
//connection to mongoose

const app =express();
const users = require('./routes/main');
//port number
const port = 3010;
//cors middleware
app.use(cors());
//body parser middleware
app.use(bodyParser.json());
//connect DB
connectDB();
app.use('/users', users)
app.get('/', (req, res)=>{
   res.send("Invalid end point");
});
app.listen(port, ()=>{
    console.log("server started");
})