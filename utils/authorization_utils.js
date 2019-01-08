const superUser = require("../model/superadmin");

module.exports.login = function (req,res) {

  let email = req.body.email;
  let password = req.body.password;

  superUser.findOne({ email:email, password: password}, (error, user)=>{

    if (user) {
      res.send("logged!");
    } else if (error) {
      res.send(error);
    } else {
      res.send("incorrect login or password");
    }
  });
};