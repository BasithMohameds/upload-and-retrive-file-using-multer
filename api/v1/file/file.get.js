const path = require("path");
const File = require("./file.model");

exports.renderFile = (res) => {
  res.sendFile(path.resolve("public/index.html"));
};

exports.retriveFile = async (res) => {
  try {
    const files = await File.find();
    res.status(200).json({
      status: "success",
      files,
    });
  } catch (error) {
    res.json({
      message: "failed",
      error,
    });
  }
};
