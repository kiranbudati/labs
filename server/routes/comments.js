const Comments = require('../models/comments');
const express = require('express');
const router = express.Router();
const config = require('../config/database');

router.get('/', (req, res) => {
    Comments.find({}, (err, comments) => {
        if (err) return next(err);
        if (comments) {
            res.json(comments);
        }
    });
});

router.post('/', (req, res, next) => {
    Comments.create(req.body, (err, comments) => {
        if (err) return next(err);
        res.json({ success: true, message: "Comment successfully posted" });
    });
});
module.exports = router;

