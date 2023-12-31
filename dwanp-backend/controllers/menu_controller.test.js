const request = require('supertest');
const app = require('../Server'); 

describe('Test the updateMenu function', () => {
    test('It should respond to the PUT method', async () => {
        const response = await request(app).put('/menu').send({ menu_item_no: '1', menu_item_name: 'test', menu_item_price: '10', potion: '2' });
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the deleteMenu function', () => {
    test('It should respond to the DELETE method', async () => {
        const response = await request(app).delete('/menu').send({ menu_item_no: '1' });
        expect(response.statusCode).toBe(200);
    });
});