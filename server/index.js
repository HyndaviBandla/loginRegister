const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeMode1 = require("./models/Employee");

const app = express();
app.use(express.json());
// transport the data that we r passing from frontend to backend in json format
app.use(cors());
// app.connect("mongodb://localhost:27017/customer");
mongoose.connect("mongodb://127.0.0.1:27017/employee");
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeMode1.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("password is incorrect");
      }
    } else {
      res.json("no record exists");
    }
  });
});
app.post("/register", (req, res) => {
  EmployeeMode1.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("server is running in port");
});
// req is data comming from frontend
// res is data sending back to frontend
