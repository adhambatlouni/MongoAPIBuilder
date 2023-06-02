var express = require("express");
var router = express.Router();

const {
    addCrewInfo,
    crewInfo,
  } = require("../controllers/crew.controller");

router.post('/crew', addCrewInfo);
router.get('/crew', crewInfo);

module.exports = router;