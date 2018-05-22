var express = require('express');
var router = express.Router();

router.use("/authentication",require("./authentication"));
router.use("/questions",require("./question"))
router.use("/domains",require("./domains"))

module.exports = router;