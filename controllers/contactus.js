const path = require("path");

const rootDir = require("../util/path");

exports.getContactus = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
};

exports.postSuccess = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
