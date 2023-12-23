//wish
const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

router.get('/order', orderController.getOrder);
router.post('/createOrder', orderController.addOrder);
router.post('/updateOrder',orderController.updateOrder);
router.post('/deleteOrder', orderController.deleteOrder);

module.exports = order_router;