const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: async (req, file, cb, res) => {
    const { originalname } = file;
    const result = originalname.split(".").shift();
    const path = `./public/uploadFiles/${result}`;
    const existFolder = fs.existsSync(path);
    if (existFolder) {
      throw Error("already exist");
    } else {
      fs.mkdirSync(path);
    }
    cb(null, path);
  },
  filename: (req, files, cb) => {
    const { originalname } = files;
    cb(null, originalname);
  },
});

exports.upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
});
