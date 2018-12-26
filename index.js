const express     = require('express');
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');

const app   = express();
const User  = require('./models/User');
const port  = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  User.find()
    .then(users => res.render('index', { users }))
    .catch(err => res.status(404).json({ msg: 'No users found' }));
});

app.post('/user/add', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password
  });

  newUser.save().then(user => res.redirect('/'));
});

app.listen(port, () => console.log('Server running...'));
