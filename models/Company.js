const mongoose = require("mongoose");
const schema = mongoose.Schema;
const CompanySchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Company", CompanySchema);
