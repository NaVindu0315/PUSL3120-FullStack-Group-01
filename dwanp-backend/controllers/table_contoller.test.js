const request = require('supertest');
const app = require('../Server'); 

describe('Test the getTables function', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/tables');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the addTable function', () => {
    test('It should respond to the POST method', async () => {
        const response = await request(app).post('/tables').send({ name: 'test', capacity: '4' });
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the updateTable function', () => {
    test('It should respond to the PUT method', async () => {
        const response = await request(app).put('/tables/1').send({ name: 'test', capacity: '6' });
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the deleteTable function', () => {
    test('It should respond to the DELETE method', async () => {
        const response = await request(app).delete('/tables/1');
        expect(response.statusCode).toBe(200);
    });
});