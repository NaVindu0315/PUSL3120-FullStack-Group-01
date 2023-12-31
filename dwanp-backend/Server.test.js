const request = require('supertest');
const app = require('./Server');

describe('Test the root path', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the employee path', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/employee');
        expect(response.statusCode).toBe(200);
    });
});