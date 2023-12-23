//aruni_menu
const express = require('express');
const router = express.Router();
const controller = require('./controllers/menu_controller');

router.get("/menu", controller.getMenu);
router.post("/createmenu", controller.addMenu);
router.post('/updatemenu', controller.updateMenu);
router.post('/deletemenu', controller.deleteMenu);

module.exports = router;