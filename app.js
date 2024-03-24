const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { publicDecrypt } = require("crypto");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);

app.use("/shop", shopRoutes);

app.use("/contactus", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "contact-us.html"));
});

app.use("/success", (req, res, next) => {
  res.send("<h1>Form successfully filled</h1>");
});

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

app.listen(3000);
