var express = require("express");
var router = express.Router();

const {
    homePageInfo,
  } = require("../controllers/homepage.controller");

router.get('/homepage', homePageInfo);

module.exports = router;