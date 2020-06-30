import axios from "axios";

export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, password) => {
    return axios.post('api/signup', { username: username, password: password });
  },
  // Gets jobs from the Google API
  getJobs: function () {
    return axios.get("/api/savedjobs");
  },
  // getJobsById: function (id) {
  //   return axios.get("api/savedjobs/" + id);
  // },
  getJobsByUser: function (user) {
    return axios.get("api/savedjobs/" + user);
  },
  // Deletes the saved job with the given id
  deleteJobs: function (id) {
    return axios.delete("/api/deletejobs/" + id);
  },
  // Saves an job to the database
  saveJobs: function (jobData) {
    return axios.post("/api/savejob/" + jobData._id, jobData);
  },
  updateJobs: function (jobData) {
    console.log("from the server")
    console.log(jobData);
    return axios.put("/api/updatejobs/" + jobData._id, jobData);
  }
};
