const express = require('express');
const router = express.Router();
const authorization = require("../utils/authorization_utils");
const createAdmins = require("../utils/create_admins");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", authorization.login);

router.post("/create", createAdmins.createSuperAdmin);

module.exports = router;
