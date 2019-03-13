const express   = require('express');
const router    = express.Router();
const bcrypt    = require('bcryptjs');

// Check the User Schema
const User  = require('../models/User');

router.get('/', (req, res) => {
  res.render('signup');
});

router.post('/', (req, res) => {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) console.log(err);
        newUser.password = hash;
        console.log(`${newUser.username}`);
        console.log(`${newUser.password}`);
        newUser
          .save()
          .then(user => { res.redirect('/'); })
          .catch(err => console.log(err));
      });
    });
    console.log("A new user has been created");
  });

module.exports = router;