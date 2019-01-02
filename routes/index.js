const express   = require('express');
const router    = express.Router();

router.get('/', (req, res) => {
    User.find()
      .then(users => res.render('index', { users }))
      .catch(err => res.status(404).json({ msg: 'No users found' }));
  });

module.exports = router;