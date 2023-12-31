const request = require('supertest');
const app = require('../Server'); 
const Menu = require('./menu_model');

describe('Test the Menu model', () => {
    test('It should create a new menu item', async () => {
        const menuItem = new Menu({ menu_item_no: 1, menu_item_name: 'test', menu_item_price: '10', potion: 2 });
        await menuItem.save();

        const foundMenuItem = await Menu.findOne({ menu_item_no: 1 });
        expect(foundMenuItem.menu_item_name).toBe('test');
    });

 
});