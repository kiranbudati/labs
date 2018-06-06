var express = require('express');
var router = express.Router();

router.use("/authentication", require("./authentication"));
router.use("/mentor/authentication", require("./mentor"));
router.use("/questions", require("./question"))
router.use("/comments", require("./comments"))
router.use("/domains", require("./domains"))
router.use("/likes_dislikes", require("./likes_and_dislikes"))
router.use("/components", require("./components"));

module.exports = router;