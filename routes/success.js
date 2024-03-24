const express = require("express");

const contactusController = require("../controllers/contactus");

const router = express.Router();

router.post("/", contactusController.postSuccess);

module.exports = router;
