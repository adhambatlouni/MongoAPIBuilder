var express = require("express");
const Order = require("../models/order");
var router = express.Router();

const multer = require("multer");
var fs = require("fs");
const path = require("path");

const {
    order,
    deleteOrder,
    ordersInfo
  } = require("../controllers/orders.controller");

router.get('/order', order);

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      console.log(file);
      cb(null, file.fieldname + "-" + Date.now());
    },
  });
  
var upload = multer({ storage: storage });

// adding an order and uploading the order image.
router.post("/addOrder", upload.single("image"), async (req, res) => {
    if (!req.body.c_name || !req.body.item || !req.body.m_name) {
        res.send();
        return;
    }

    console.log(req.file);
    var ext = "images/";
    findExt(req.file.originalname, req.file.originalname.length - 1);

    // recursive function for uploading an image.
    function findExt(origName, index) {
    if (origName[index] == ".") return;
    findExt(origName, index - 1);
    ext += origName[index];
    }
  
    var c;
    Order.findOne({}, function (err, data) {
        if (data) {
            c = data.unique_id + 1;
        } 
        else {
            c = 1;
        }          
  
        var newOrder = {
            unique_id: c,
            customer_name : req.body.c_name,
            item_name: req.body.item,
            manager_name : req.body.m_name, 
            image: {
                data: fs.readFileSync(
                path.join(__dirname + "/../uploads/" + req.file.filename)
                ),
                contentType: ext,
            },          
        };    
  
        Order.create(newOrder, (err, item) => {
                  
          if (err) {
            console.log(err);
          }
        });
    })
    .sort({ _id: -1 })
    .limit(1);
            
    res.redirect('/menu');   
    });

router.post('/deleteorder/:id', deleteOrder);

router.get('/ordersInfo', ordersInfo);

module.exports = router;