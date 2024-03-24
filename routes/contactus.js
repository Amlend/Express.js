const express = require("express");

const contactusController = require("../controllers/contactus");

const router = express.Router();

router.get("/", contactusController.getContactus);

module.exports = router;
