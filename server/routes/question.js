const Question = require('../models/questions');
const express = require('express');
const router = express.Router();
const config = require('../config/database');

router.get('/',(req, res) => {
    Question.find({},(err, questions)=> {
        if (err) return next(err);
        if(questions){
            res.json(questions);
        }
    });
});

router.post('/',(req,res,next)=>{
    Question.create(req.body,(err,questions)=> {
        if (err) return next(err);
        res.json({success: true, message: "Questions successfully posted"});
    });
});
module.exports = router;

