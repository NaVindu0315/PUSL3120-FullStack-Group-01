//pasindu
const express = require("express");
const router = express.Router();

const invcontroller = require("../controllers/inventory_controller");

router.get("/inventory", invcontroller.getInventory);
router.post("/createinventory", invcontroller.addInventory);
router.get("/inventory", invcontroller.getInventory);
router.get("/inventory", invcontroller.getInventory);

module.exports = router;
