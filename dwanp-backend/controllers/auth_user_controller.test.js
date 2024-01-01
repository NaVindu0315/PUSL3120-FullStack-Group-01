const request = require('supertest');
const app = require('..Server'); 
const { authloginUser, authsignupUser } = require('./auth_user_controller');

describe('Test the authloginUser function', () => {
    test('It should respond to the POST method', async () => {
        const response = await request(app).post('/login').send({ username: 'test', password: 'test' });
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the authsignupUser function', () => {
    test('It should respond to the POST method', async () => {
        const response = await request(app).post('/signup').send({ username: 'test', password: 'test' });
        expect(response.statusCode).toBe(200);
    });
});
// Path: dwanp-backend/controllers/auth_user_controller.test.js