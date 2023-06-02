const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");

require("dotenv").config();

const app = express();

module.exports = app;

app.set('view engine', 'ejs');

mongoose.set("strictQuery", false);
mongoose.connect(
    "mongodb://0.0.0.0:27017/coffeeshop",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log("MongoDB Connection Succeeded.");
      } else {
        console.log("Error in DB connection : " + err);
      }
    }
  );

app.use(bodyParser.json());

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));

var HomepageRoute = require('./route/homepage.route');

var OffersRoute = require('./route/offers.route');

var ProductsRoute = require('./route/products.route');

var CrewRoute = require('./route/crew.route');

var CustomerRoute = require('./route/customer.route');

var OrdersRoute = require('./route/orders.route');

var WeatherRoute = require('./route/weather.route');

app.use('', HomepageRoute);

app.use('', OffersRoute);

app.use('', ProductsRoute);

app.use('', CrewRoute);

app.use('', CustomerRoute);

app.use('', OrdersRoute);

app.use('', WeatherRoute);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {});

const PORT = 3001;

app.listen(PORT);

console.log(`Server is running on ${PORT}`);

app.use(express.static(__dirname + '/public'));