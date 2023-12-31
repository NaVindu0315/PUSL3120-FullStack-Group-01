const request = require('supertest');
const app = require('../Server'); 
const Order = require('./order_model');

describe('Test the Order model', () => {
    test('It should create a new order', async () => {
        const order = new Order({ Orderid: 1, foodItemCode: 'test', noOfPotions: 2, date: '2022-01-01' });
        await order.save();

        const foundOrder = await Order.findOne({ Orderid: 1 });
        expect(foundOrder.foodItemCode).toBe('test');
    });

});