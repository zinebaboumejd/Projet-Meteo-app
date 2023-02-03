
const express = require("express");
const router = express.Router();
const { get } = require("./getController");

router.get("/hello", get);

module.exports = router;