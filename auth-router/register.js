const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('./user-model');


router.post("/register", (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
    department:req.body.department,
  }
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;
  db.add(user)
    .then(user => {
      res.json(user);
    }).catch(error => {
      console.log(error);
  }) 
})