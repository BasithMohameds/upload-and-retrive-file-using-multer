const path = require("path");
const File = require("./file.model");

exports.renderFile = (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
};

exports.retriveFile = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json({
      status: "success",
      files,
    });
  } catch (error) {
    res.json({
      status: "Fail",
      error,
    });
  }
};
