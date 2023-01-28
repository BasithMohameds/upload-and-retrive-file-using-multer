const File = require("./file.model");
const express = require("express");
const path = require("path");

//single file
exports.UploadeFile = async ({ file = {} }, res) => {
  const { filename, mimetype, originalname } = file;
  try {
    const dynamicFolder = originalname.split(".").shift();
    const FileUrl = process.env.baseUrl + dynamicFolder + "/" + originalname;
    const newFile = await File.create({
      name: filename,
      type: mimetype,
      url: FileUrl,
    });
    res.status(200).json({
      message: "File uploaded successfully!!",
      file: newFile,
    });
  } catch (error) {
    res.json({
      message: "File upload failed",
      error: error,
    });
  }
};
