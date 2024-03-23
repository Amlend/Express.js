const express = require("express");
const router = require("./admin");

const routes = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>Hello Express.js</h1>");
});

module.exports = router;
