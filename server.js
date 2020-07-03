require('dotenv').config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const db = require('./models');
const isAuthenticated = require("./config/isAuthenticated");
const auth = require("./config/auth");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose
  // for the app to work as a deployed app with mLAB MongoDB provision on Heroku, use:
   .connect(process.env.MONGODB_URI || 'mongodb://user:password123@ds211694.mlab.com:11694/heroku_0m0btlct', { useNewUrlParser: true})
  // for LOCAL Testing, use:
  // .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jobTrakDB', { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));

// Define API routes here
// LOGIN ROUTE
app.post('/api/login', (req, res) => {
  auth
    .logUserIn(req.body.user, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});
// SIGNUP ROUTE
app.post('/api/signup', (req, res) => {
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});
// Any route with isAuthenticated is protected and you need a valid token
// to access
app.get('/api/user/:id', (req, res) => {
  db.User.findById(req.params.id).then(data => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({ success: false, message: 'No user found' });
    }
  }).catch(err => res.status(400).send(err));
});
app.post('/api/savejob/:id', function (req, res) {
  console.log(req.body);
  db.Job.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});
app.get('/api/savedjobs', (req, res) => {
  db.Job.find({})
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});
app.get('/api/savedjobs/:user', (req, res) => {
  db.Job.find({user: req.params.user})
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});
// app.get('/api/savedjobs/:id', (req, res) => {
//   db.Job.find({ _id: req.params.id })
//     .then(data => res.json(data))
//     .catch(err => res.status(400).json(err));
// });
app.delete('/api/deletejobs/:id', (req, res) => {
  db.Job.findOneAndDelete({ _id: req.params.id })
    .then(console.log(req.params.id))
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});
app.put('/api/updatejobs/:id', (req, res) => {
  db.Job.findByIdAndUpdate(
    req.params.id, req.body, { new: true }, function (err, doc) {
      if (err) return res.send(500, { error: err })
    })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});
app.get('/', isAuthenticated /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
