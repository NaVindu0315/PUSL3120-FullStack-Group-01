const express = require('express');
const router = express.Router();
const tablecontroller = require('../controllers/table_controller');

router.get("/tables", tablecontroller.getTables);
router.post("/addtable", tablecontroller.addTable);
router.post('/updatetable', tablecontroller.updateTable);
router.post('/deletetable', tablecontroller.deleteTable);

module.exports = router;