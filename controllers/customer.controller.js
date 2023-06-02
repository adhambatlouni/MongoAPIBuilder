const bcrypt = require("bcrypt");
const Customer = require("../models/customer");

exports.signup = (req, res) => {

  res.render('signup');
}

exports.login = (req, res) => {

  res.render('login');
}

exports.createCustomer = async (req, res) => {

  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(422).json({
    status: 422,
      customer: {
        name: "Customer name is required",
        email: "Email is required",
        password: "Password is required",
      },
    });
  }

  const customer = new Customer(req.body);

  var c;
  Customer.findOne({}, function (err, data) {
    if (data) {
      c = data.unique_id + 1;
    } 
    else {
      c = 1;
    }
    
  var newCustomer = {
    unique_id: c,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,    
  };

    Customer.create(newCustomer, (err, item) => {
                
      if (err) {
      console.log(err);
      }
    });
 })
  .sort({ _id: -1 })
  .limit(1);
          
  res.redirect('/homepage');
};

exports.customerLogin = async (req, res) => {
     
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(422).json({
        status: 422,
        customer: {
          name: "Customer name is required",
          password: "Password is required",
        },
      });
    }

    const customer = new Customer(req.body);

    const { name, password } = req.body;

    const customerpassword = await Customer.findOne({password});

    const noMatch = await bcrypt.compare(password, customerpassword.password);
    console.log(noMatch);

    if (noMatch) {
      return res.status(401).send({ error: 'Invalid username or password' });
    }
    else {
      res.redirect('/homepage');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'An error occurred while trying to log in' });
  }   
}

exports.readCustomer = async (req, res) => {

  Customer.find({}, (err, customerInfo) => {
    if (err) {
      console.log(err);
      res.send(err);
    } 
    else 
    res.render("Info", {customerInfo});
  });
}

exports.deleteCustomer = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customer.findByIdAndRemove(id, {
      useFindAndModify: false,
    });
      
    if (!customer) {
      return res.status(500).send({
        status: 500,
        message: `customer not found with id ${id}`,
      });
    }
    res.redirect("/info");

  } catch (error) {
    res.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
};


