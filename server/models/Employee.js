const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const EmployeeMode1 = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeMode1;
