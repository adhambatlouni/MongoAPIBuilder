const Manager = require("../models/manager");

exports.addCrewInfo = async (req, res) => {

  var managerInfo = {
    manager_name: `Jordon Lennon`,
    manager_email: `jordan.lennon@gmail.com`,
    manager_contactno: `+1 202-918-2132`,
  };
    
  await Manager.create(managerInfo);    
  res.redirect("crew");
}

exports.crewInfo = async (req, res) => {

  Manager.find({}, (err, shopCrew) => {
    if (err) {
      console.log(err);
      res.send(err);
    } 
    else 
    res.render("crew", {shopCrew});
  });
}