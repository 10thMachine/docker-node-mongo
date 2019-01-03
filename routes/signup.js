const express   = require('express');
const router    = express.Router();
const bcrypt    = require('bcryptjs');

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
      if(err) {
        console.log(err);
      } else {
        newUser.password = hash;
        newUser.save().then(user => res.redirect('/'));
      }
    });
  });
  console.log("A new user has been created");
  });

module.exports = router;