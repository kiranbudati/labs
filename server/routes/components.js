const Components = require('../models/components');
const express = require('express');
const router = express.Router();
const config = require('../config/database');

router.get('/', (req, res, next) => {
    Components.find({}, (err, component) => {
        if (err) return next(err);
        if(component){
            res.json(component);
        }
    });
});

router.post('/',(req,res,next)=>{
    Components.create(req.body,(err,component)=>{
        if (err) return next(err);
        res.json({ success: true, message: 'Component added successfully.'})
    });
});
module.exports = router;
