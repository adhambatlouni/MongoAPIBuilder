var express = require("express");
var router = express.Router();

const {
    productsInfo,
    addItems,
    itemInfo,
  } = require("../controllers/products.controller");

router.get('/products', productsInfo);

router.post('/menu', addItems);

router.get('/menu', itemInfo);

module.exports = router;