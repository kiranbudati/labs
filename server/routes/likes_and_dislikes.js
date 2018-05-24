const LikesAndDislikes = require('../models/likes_and_dislikes');
const express = require('express');
const router = express.Router();
const config = require('../config/database');

router.get('/', (req, res) => {
    LikesAndDislikes.find({}, (err, lad) => {
        if (err) return next(err)
        res.json(lad)
    })
});

router.post('/', (req, res, next) => {
    LikesAndDislikes.find({ questionId: req.body.questionId, userId: req.body.userId }, (err, ques) => {
        if (err) return next(err)
        if (ques.length === 1) {
            var id = ques[0]._id;
            LikesAndDislikes.findByIdAndUpdate(id, req.body, { new: true }, (err, lik) => {
                if (err) return next(err)
                res.json(lik);
            });
        }
        else {
            LikesAndDislikes.create(req.body, (err, lad) => {
                if (err) return next(err);
                res.json({ success: true, message: "Liked / disliked successfully",resp:lad });
            });
        }
    });
    // LikesAndDislikes.find({ questionId: req.body.questionId }, (err, ques) => {
    //     if (err) {
    //         return next(err)
    //     }
    //     else {
    //         if (ques != null) {
    //             LikesAndDislikes.find({ userId: req.body.userId }, (err, user) => {

    //             });            
    //         }
    //         else {
    //             LikesAndDislikes.create(req.body, (err, lad) => {
    //                 if (err) return next(err);
    //                 res.json({ success: true, message: "Liked / disliked successfully" });
    //             });
    //         }
    //     }

    // });
});
module.exports = router;
