const Question = require('../models/questions');
const Comments = require('../models/comments')
const express = require('express');
const router = express.Router();
const config = require('../config/database');

router.get('/', (req, res) => {
    Question.find({}, (err, questions) => {
        if (err) return next(err);
        if (questions) {
            res.json(questions);
        }
    });
});
router.get('/:id', function (req, res, next) {
    rest = []; comm = [];
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        Question.findById(req.params.id, (err, question) => {
            if (err) return next(err);
            rest = question;
            if (question) {
                Comments.find({questionId: req.params.id}, (err, comment) => {
                    if (err) return next(err);
                    comm.push(comment);
                    res.json({question,comment});
                });
            }
            // console.log(allComments);
        });
    }
    else {
        res.json({ success: false, message: "Questions Id Different" });
    }
});

router.post('/', (req, res, next) => {
    Question.create(req.body, (err, questions) => {
        if (err) return next(err);
        res.json({ success: true, message: "Questions successfully posted" });
    });
});
module.exports = router;

