import axios from "axios";

export default {
  // Gets books from the Google API
  getJobs: function() {
    return axios.get("/api/savedjobs");
  },
  getJobsById: function(id){
    return axios.get("api/savedjobs/" + id);
  },
  // Gets all saved books
  // getSavedJobs: function() {
  //   return axios.get("/api/books");
  // },
  // Deletes the saved book with the given id
  deleteJobs: function(id) {
    return axios.delete("/api/deletejobs/" + id);
  },
  // Saves an book to the database
  saveJobs: function(jobData) {
    return axios.post("/api/savejob/" + jobData._id, jobData);
  },
  updateJobs: function(jobData) {
    return axios.put("/api/updatejobs/" + jobData._id, jobData);
  }
};
