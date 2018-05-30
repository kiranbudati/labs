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
        res.json({ success: true, message: "Comment successfully posted", resp: comments });
    });
});

router.delete('/:id', (req, res, next) => {
    Comments.findByIdAndRemove({ _id: req.params.id }, (err, com) => {
        if (err) return next(err);
        res.json({ success: true, message: "Comment deleted successfully", resp: com });

    })
});
router.put('/', (req, res, next) => {
    Comments.findByIdAndUpdate({ _id: req.body.id }, { comment: req.body.comment }, (err, com) => {
        if (err) return next(err);
        res.json(com);
    });
});
module.exports = router;

