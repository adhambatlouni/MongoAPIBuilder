var express = require("express");
var router = express.Router();

const {
    offersInfo,
  } = require("../controllers/offers.controller");

router.get('/offers', offersInfo);

module.exports = router;