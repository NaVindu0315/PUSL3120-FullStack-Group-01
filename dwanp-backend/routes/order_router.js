//wish
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/Order', controller.getOrder);
router.post('/createOrder', controller.addOrder);
router.post('/updateOrder', controller.updateOrder);
router.post('/deleteOrder', controller.deleteOrder);

module.exports = router;