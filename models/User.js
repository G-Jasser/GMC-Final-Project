const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
  },
});
module.exports = mongoose.model("user", UserSchema);
