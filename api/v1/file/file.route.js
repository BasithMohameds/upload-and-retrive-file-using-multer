const express = require("express");
const UserRoute = express.Router();

const { UploadeFile } = require("./file.post");
const { renderFile, retriveFile } = require("./file.get");
const { upload } = require("../utils/multerstorage");

UserRoute.get("/", async (req, res) => renderFile(res));

UserRoute.post("/uploadfile", upload.single("upload"), UploadeFile);

UserRoute.get("/retrivefile", async (req, res) => retriveFile(res));

module.exports = UserRoute;
