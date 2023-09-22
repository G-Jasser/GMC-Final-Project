const mongoose = require("mongoose");
const schema = mongoose.Schema;
const PostSchema = new schema({
  job_title: {
    type: String,

  }
  ,
  company_name: {
    type: String,

  },
  location: {
    type: String,

  },
  salary: {
    type: String,

  },
  pending_applicants: {
    type: String,

  },
  job_requirement: {
    type: String,

  },
  job_responsibilities: {
    type: String,

  }
});
module.exports = mongoose.model("post", PostSchema);
