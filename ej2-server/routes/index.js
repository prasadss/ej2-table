const express = require("express");
const router = express.Router();
const column = require("./column");

router.use("/column", column);

module.exports = router;