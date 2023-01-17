const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const UserRoute = require("./api/v1/file/file.route");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/fileupload"),
  () => {
    console.log("database connected..!");
  };

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/uploadfiles", express.static("uploadfiles"));

app.use("/user", UserRoute);

app.listen(3000, () => {
  console.log("server started..!");
});
