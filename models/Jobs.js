const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    
    company: { type: String, required: true },
    jobTitle: { type: String, required: true },
    status: { type: String},
    location: { type: String},
    dateApplied: { type: String },
    jobUrl: { type: String},
    source: { type: String}
});

const Jobs = mongoose.model("Job", JobSchema);

module.exports = Jobs;