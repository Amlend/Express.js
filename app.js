const express = require("express");

const app = express();

app.use((req, res, next) => {
  next();
});

app.use((req, res, next) => {
  res.send("<h1>Hello Express.js</h1>");
});

app.listen(3000);
