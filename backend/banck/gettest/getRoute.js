
const express = require("express");
const router = express.Router();
const { get } = require("./getController");

router.get("/", get);

module.exports = router;