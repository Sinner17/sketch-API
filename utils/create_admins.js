const superAdmin = require("../model/superadmin");

module.exports.createSuperAdmin = function (req,res) {

  let sAdmin = new superAdmin({
    email: req.body.email,
    password: req.body.password
  });

  console.log(req.body.email + " " + req.body.password);

  sAdmin.save((error)=>{
      console.log(error);
    if (error){
      res.send(error.message);
    }  else {
      res.redirect("/");
    }
  });

};