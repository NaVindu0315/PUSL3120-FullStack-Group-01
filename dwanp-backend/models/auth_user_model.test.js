const request = require('supertest');
const app = require('../Server'); 
const AuthUser = require('./auth_user_model');

describe('Test the AuthUser model', () => {
    test('It should create a new user', async () => {
        const user = new AuthUser({ username: 'test', password: 'test' });
        await user.save();

        const foundUser = await AuthUser.findOne({ username: 'test' });
        expect(foundUser.username).toBe('test');
    });

});