const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('./user-model');


router.post("/login", (req, res) => {
      const { username, password } = req.body;
    db.findBy({ username }).first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {

        req.session.user = user;

      res.status(200).json({message: `Welcome ${user.username}`})
      } else {
        res.status(401).json({ message: 'Invalid credentials !'});
      }
    
    }).catch(error => {
      console.log(error);
  })
})