//pasindu
const express = require("express");
const router = express.Router();

const invcontroller = require("../controllers/inventory_controller");

router.get("/inventory", invcontroller.getInventory);

module.exports = router;
