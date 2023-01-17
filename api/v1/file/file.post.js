const File = require("./file.model");

//single file
exports.UploadeFile = async (req, res) => {
  try {
    console.log(req.file, "file");
    const newFile = await File.create({
      name: req.file.filename,
      type: req.file.mimetype,
      url: process.env.baseUrl + req.file.originalname,
    });
    res.status(200).json({
      status: "success",
      message: "File created successfully!!",
      file: newFile,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};
