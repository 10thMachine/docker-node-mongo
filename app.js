const express     = require('express');
// const mongoose    = require('mongoose');

const app   = express();

const PORT  = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// Express body Parser
app.use(express.urlencoded({ extended: false }));

// // Connect to MongoDB
// mongoose
//   .connect(
//     'mongodb://mongo:27017/docker-node-mongo',
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// Routes
app.use('/', require('./routes/index.js'));
// app.use('/signup', require('./routes/signup.js'));

app.listen(PORT,  console.log(`Server running is running on ${PORT}`));
