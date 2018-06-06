const Mentor = require('../models/mentor');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');

router.get('/mentors', (req, res, next) => {
    Mentor.find({}, (err, mentor) => {
        if (err) return next(err);
        res.json(mentor);
    })
});
//login 
router.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    Mentor.findOne({ username: username }, function (err, users) {
        if (err) return next(err);
        if (users) {
            var validPassword = users.comparePassword(req.body.password);
            if (!validPassword) {
                res.json({ success: false, message: 'Inavalid Password.' });
            }
            else {
                var token = jwt.sign({ userId: users._id }, config.secret, { expiresIn: '24h' })
                res.json({
                    success: true, type: 'mentor', message: 'logged in successfully.', token: token,
                    mentor: { id: users._id, username: users.username }
                });
            }
        }
        else {
            res.json({ success: false, message: 'Mentor not found.' });
        }
    });
});
// router.post('/login', (req, res, next) => {
//     Mentor.find({ username: req.body.username }, (err, mentor) => {
//         if (err) return next(err);
//         if (mentor.length > 0) {
//             var validPassword = mentor.comparePassword(req.body.password);
//             if (!validPassword) {
//                 res.json({ success: false, message: 'Inavalid Password.' });
//             }
//             else {
//                 var token = jwt.sign({ mentorId: mentor._id }, config.secret, { expiresIn: '24h' })
//                 res.json({ success: true, message: 'logged in successfully.', token: token, mentor: mentor });
//             }
//         }
//         else {
//             res.json({ success: false, message: 'User not found.' });
//         }
//     });
// });

//register 
router.post('/register', (req, res, next) => {
    Mentor.find({ username: req.body.username }, (err, men) => {
        if (err) return next(err);
        if (men.length == 0) {
            Mentor.create(req.body, (err, mentor) => {
                if (err) return next(err);
                res.json({ success: true, message: 'Registered Successfully' });
            });
        }
        else {
            res.json({ success: true, message: 'Already registered' });
        }
    })

});

module.exports = router;