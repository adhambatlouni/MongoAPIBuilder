var express = require("express");
var router = express.Router();

const {
    weatherInfo,
    getWeather,
  } = require("../controllers/weather.controller");

router.get('/weatherInfo', weatherInfo);
router.post('/getWeather', getWeather);

module.exports = router;