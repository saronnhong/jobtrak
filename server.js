const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const db = require('./models');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose
  // for the app to work as a deployed app with mLAB MongoDB provision on Heroku, use:
  //  .connect(process.env.MONGODB_URI || 'mongodb://user:password123@ds035844.mlab.com:35844/heroku_mxr3c7lz', { useNewUrlParser: true})
  // for LOCAL Testing, use:
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jobTrakDB', { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));

// Define API routes here
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
app.get('/api/savedjobs/:id', (req, res) => {
  db.Job.findOne({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));

});
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
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
