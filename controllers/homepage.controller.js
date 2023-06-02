const Shop = require("../models/shop");

exports.addShopInfo = async (req, res) => {
  var shopInfo = {
    shop_name: `Blessed Beans`,
    shop_email: `blessed.beans@gmail.com`,
    shop_contactno: `+1 505-644-7245`,
  };
    
  await Shop.create(shopInfo); 
  
  res.redirect("homepage");
}

exports.homePageInfo = async (req, res) => {

  Shop.find({}, (err, shop) => {
    if (err) {
      console.log(err);
      res.send(err);
    } 
    else res.render("homepage", {shop});
  });
}