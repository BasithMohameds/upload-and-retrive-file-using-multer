const express = require("express");
const UserRoute = express.Router();

const { UploadeFile } = require("./file.post");
const { renderFile, retriveFile } = require("./file.get");
const { upload } = require("../utils/multerstorage");

UserRoute.get("/", renderFile);

UserRoute.post("/uploadfile", upload.single("upload"), UploadeFile);

UserRoute.get("/retrivefile", retriveFile);

module.exports = UserRoute;
