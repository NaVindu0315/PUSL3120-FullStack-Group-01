//aruni_menu
const express = require('express');
const router = express.Router();
const mencontroller = require('../controllers/menu_controller');

router.get("/menu", mencontroller.getMenu);
router.post("/createmenu", mencontroller.addMenu);
router.post('/updatemenu', mencontroller.updateMenu);
router.post('/deletemenu', mencontroller.deleteMenu);

module.exports = router;