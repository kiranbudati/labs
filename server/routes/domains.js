const Domain = require('../models/domains');
const express = require('express');
const router = express.Router();
const config = require('../config/database');

router.get('/',(req, res) => {
    Domain.find({},(err, domain)=> {
        if (err) return next(err);
        if(domain){
            res.json(domain);
        }
    });
});

router.post('/',(req,res,next)=>{
    Domain.create(req.body,(err,domain)=> {
        if (err) return next(err);
        res.json({success: true, message: "domain successfully added"});
    });
});
module.exports = router;

