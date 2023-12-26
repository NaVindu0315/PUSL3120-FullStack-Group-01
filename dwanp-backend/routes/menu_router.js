//aruni_menu
const express = require('express');
const router = express.Router();
const menucontroller = require('../controllers/menu_controller');

router.get("/menu", menucontroller.getMenu);
router.post("/createmenu", menucontroller.addMenu);
router.post('/updatemenu', menucontroller.updateMenu);
router.post('/deletemenu', menucontroller.deleteMenu);

module.exports = router;