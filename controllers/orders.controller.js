const Order = require("../models/order");
const Customer = require("../models/customer");
const Manager = require("../models/manager");
const Item = require("../models/item");

exports.order = async (req, res) => {
  try {
    const managers = await Manager.find({});
    console.log(managers);
    
    const items = await Item.find({});
    console.log(items);

    const customers = await Customer.find({});
    console.log(customers);

    res.render('order', { managers: managers,  items: items, customers: customers});
  } catch (error) {
      console.log(error);
  }
}

exports.deleteOrder = async (req, res) => {
  const id = req.params.id;
  try {
    const order = await Order.findByIdAndRemove(id, {
      useFindAndModify: false,
    });
        
    if (!order) {
      return res.status(500).send({
        status: 500,
        message: `customer not found with id ${id}`,
      });
    }
    res.redirect("/OrdersInfo");
  
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
};

exports.ordersInfo = async (req, res) => {
  Order.find({}, (err, ordersInfo) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else res.render("ordersInfo", { ordersInfo });
  });
}
