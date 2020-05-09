
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('./user-model');
const restricted = require('../middleware/restricted');


router.get("/users", restricted(), async (req, res, next) => {
  db.find().then(members => {
    res.json(members);
  }).catch(error => {
    next(error);
  }) 
}
);

module.exports = router;