const User = require('../models/maker');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

rand = makeid();
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'kiranreddy1284@gmail.com',
        pass: '9010898679'
    }
});
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'kiranreddy1284@gmail.com',
//vinushavudugu@h-bots.com
//9542347695
//         pass: '9010898679'
//     }
// });
// const transporter = nodemailer.createTransport(smtpTransport({
//     // service: 'gmail',
//     host: 'smtp.zoho.com',
//     auth: {
//         user: 'vinushavudugu@h-bots.com',
//         pass: '9542347695'
//     }
// }));
router.get('/login', (req, res) => {
    User.find({}, (err, users) => {
        if (err) return next(err);
        if (users) {
            res.json(users);
        }
    });
});
router.put('/update', (req, res, next) => {
    req.body.data.token = rand;
    req.body.data.verified = false;
    User.findByIdAndUpdate({ _id: req.body.id }, req.body.data, (err, user) => {
        if (err) return next(err);
        if (user) {
            host = req.get('host');
            link = "http://" + req.get('host') + "/authentication/verify?token=" + rand + "&email=" + req.body.data.email;
            var mailOptions = {
                from: 'kiranreddy1284@gmail.com',
                to: req.body.data.email,
                subject: "Please confirm your Email account",
                html: "Click to Verify : <br>" + link
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error.message);
                }
                console.log('success');
            });
            // transporter.sendMail(mailOptions, function (error, info) {
            //     if (error) {
            //         console.log(error);
            //     } else {
            //         console.log('Email sent: ' + info.response);
            //     }
            // });
        }
        res.json(user);
    });
});

router.post('/login', (req, res) => {
    var hallticket = req.body.hallticket;
    var password = req.body.password;

    User.findOne({ hallticket: hallticket }, function (err, users) {
        if (err) return next(err);
        if (users) {
            var validPassword = users.comparePassword(req.body.password);
            if (!validPassword) {
                res.json({ success: false, message: 'Inavalid Password.' });
            }
            else {
                var token = jwt.sign({ userId: users._id }, config.secret, { expiresIn: '24h' })
                res.json({ success: true, message: 'logged in successfully.', token: token, user: users });
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
        // verified: false,
        // token: rand
    });
    User.findOne({ hallticket: req.body.hallticket }, function (err, users) {
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
router.use((req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        res.json({ success: false, message: "No token provided" });
    }
    else {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                res.json({ success: false, message: "Token invalid" });
            }
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
});

router.get('/profile', (req, res) => {
    User.findOne({ _id: req.decoded.userId }).select('username email').exec((err, usr) => {
        if (err) {
            res.json({ success: false, message: err });
        }
        else {
            if (!usr) {
                res.json({ success: false, message: "User not found" });
            }
            else {
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