const express = require('express');
const router = express.Router();
const authorization = require("../utils/authorization_utils");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", authorization.login);

module.exports = router;
