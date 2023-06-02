const Item = require("../models/item");



exports.productsInfo = (req, res) => {
    res.render('products');    
}

exports.menu = (req, res) => {
    res.render('menu');    
}

exports.addItems = async (req, res) => {
  var menuInfo = [{
    item_name: "buttermilk pancakes",
    item_category: "breakfast",
    item_price: 15.99,
    },
    {
      item_name: "iced caramel latte",
      item_category: "coffee",
      item_price: 13.99,
    },
    {
      item_name: "orange juice",
      item_category: "juice",
      item_price: 5.99,
    },
    {
      item_name: "spanish omelet",
      item_category: "breakfast",
      item_price: 16.99,
    },
    {
      item_name: "watermelon juice",
      item_category: "juice",
      item_price: 6.99,
    },
    {
      item_name: "raspberry chocolate cake",
      item_category: "cake",
      item_price: 9.99,
    },
    {
      item_name: "chocolate cake",
      item_category: "cake",
      item_price: 10.99,
    },
    {
      item_name: " latin coffee",
      item_category: "coffee",
      item_price: 5.99,
    },
    {
      item_name: "bubble tea",
      item_category: "tea",
      item_price: 7.99,
    },
    {
      item_name: "orriental coffee",
      item_category: "coffee",
      item_price: 4.99,
    },
  ];
    
  await Item.create(menuInfo);    
  res.redirect("menu");
}

exports.itemInfo = async (req, res) => {

     Item.find({}, (err, products) => {
        if (err) {
            console.log(err);
            res.send(err);
          } else res.render("menu", { products });
        });
}