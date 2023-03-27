const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.get("/:id/get", class1.a);
router.post("/:id/post", class1.b);

module.exports = router;
