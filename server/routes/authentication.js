const User = require('../models/maker');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

rand = makeid();

const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: 'kiranreddy1284@gmail.com',
        pass: '9010898679'
    }
}));
router.get('/login',(req,res)=>{
    User.find({},(err,users)=> {
        if (err) return next(err);
        if(users){
            res.json(users);
        }
    });
});
router.post('/login', (req, res) => {
    var hallticket = req.body.hallticket;
    var password = req.body.password;

    User.findOne({ hallticket: hallticket }, function (err, users) {
        if (err) return next(err);
        if (users) {
            if (users.verified) {
                var validPassword = users.comparePassword(req.body.password);
                if (!validPassword) {
                    res.json({ success: false, message: 'Inavalid Password.' });
                }
                else {
                    var token = jwt.sign({ userId: users._id }, config.secret, { expiresIn: '24h' })
                    res.json({ success: true, message: 'logged in successfully.', token: token, user: { username: users.hallticket,userId: users._id,fullname:users.fullname } });
                }
            }
            else {
                res.json({ success: true, message: 'Please verify email to continue.' });
            }
        }
        else {
            res.json({ success: false, message: 'User not found.' });
        }
    });
});
router.post('/register', (req, res) => {
    // console.log(req.body.hallticket);
    let user = new User({
        // email: req.body.email.toLowerCase(),
        hallticket: req.body.hallticket,
        password: req.body.password,
        email: req.body.email,
        fullname: req.body.fullname,
        verified: true,
        token: rand
    });
    User.findOne({ hallticket: req.body.hallticket }, function (err, users) {
        console.log(users);
        if (err) return next(err);
        if (!users) {
            user.save((err) => {
                // host = req.get('host');
                // link = "http://" + req.get('host') + "/authentication/verify?token=" + rand + "&email=" + req.body.email;
                // var mailOptions = {
                //     from: 'Kirans blog',
                //     to: req.body.email,
                //     subject: "Please confirm your Email account",
                //     html: "Click to Verify : <br>" + link
                // };
                // transporter.sendMail(mailOptions, function (error, info) {
                //     if (error) {
                //         console.log(error);
                //     } else {
                //         console.log('Email sent: ' + info.response);
                //     }
                // });
                res.json({ success: true, message: 'Registered Successfully' });
            });
        }
        else {
            res.json({ success: false, message: 'Email already exists' });
        }
    });
});
router.get('/verify', (req, res) => {
    User.findOne({ email: req.query.email }, function (err, users) {
        if (err) return next(err);
        if (users) {
            if (users.token === req.query.token) {
                User.update({ email: req.query.email }, { $set: { verified: true } }, function (err, result) {
                    res.json({ success: true, message: "Email was verified successfully" });
                });
            }
            else {
                res.json({ success: false, message: "Token miss match" });
            }
        }
        else {
            res.json({ success: false, message: "Email not found" });
        }
    });
    // res.send("Params:" + JSON.stringify(req.query));
    // console.log(req.query)
});
const decoded = null;
router.use((req,res,next)=>{
   const token =  req.headers['authorization'];
   if(!token){
    res.json({ success: false, message: "No token provided" });
   }
   else{
       jwt.verify(token,config.secret,(err,decoded)=>{
           if(err){
            res.json({ success: false, message: "Token invalid" });
           }
           else{
               req.decoded = decoded;
               next();
           }
       });
   }
});

router.get('/profile',(req,res) =>{
    User.findOne({_id: req.decoded.userId}).select('username email').exec((err,usr)=>{
        if(err){
            res.json({success: false, message: err});
        }
        else{
            if(!usr){
                res.json({ success: false, message: "User not found" });
            }
            else{
                res.json({ success: true, user: usr });
            }
        }
    });
});
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 25; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

module.exports = router;