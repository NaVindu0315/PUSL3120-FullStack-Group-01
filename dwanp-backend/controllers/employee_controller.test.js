const request = require('supertest');
const app = require('../Server'); 

describe('Test the addEmp function', () => {
    test('It should respond to the POST method', async () => {
        const response = await request(app).post('/employee').send({ name: 'test', job: 'test' });
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the getEmp function', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/employee');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the deleteEmp function', () => {
    test('It should respond to the DELETE method', async () => {
        const response = await request(app).delete('/employee/1');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the updateEmp function', () => {
    test('It should respond to the PUT method', async () => {
        const response = await request(app).put('/employee/1').send({ name: 'test', job: 'test' });
        expect(response.statusCode).toBe(200);
    });
});