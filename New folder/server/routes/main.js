const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../model/login');

router.get('/register', async (req, res, next)=>{
   let newUser = new User({
       name: "Mona1",
       password: "1234567"

   })
   console.log("registered");
   await newUser.save();
});
router.get('/authenticate', (req, res, next)=>{
    console.log("Authenticated");
    res.send('Authent1icate');
});
router.get('/profile', (req, res, next)=>{
    res.send('PROFILE ');
});






module.exports = router;