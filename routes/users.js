const express   = require('express');
const router    = express.Router();

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', (req, res) => {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
  
    newUser.save().then(user => res.redirect('/'));
    console.log("A new has been created");
  });

module.exports = router;