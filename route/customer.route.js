var express = require("express");
var router = express.Router();

const {
    signup,
    login,
    customerLogin,
    createCustomer,
    deleteCustomer,
    readCustomer,
  } = require("../controllers/customer.controller");

router.get('/signup', signup);

router.get('/login', login);

router.get('/', login);

router.post('/customerLogin', customerLogin);

router.post('/createCustomer', createCustomer);

router.post('/deletecustomer/:id', deleteCustomer);

router.get('/info', readCustomer);

module.exports = router;