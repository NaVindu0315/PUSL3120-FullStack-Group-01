const request = require('supertest');
const app = require('./Server'); 
const Table = require('./table_model');

describe('Test the Table model', () => {
    test('It should create a new table', async () => {
        const table = new Table({ table_no: 1, used_date: '2022-01-01', used_time: '12:00', person_count: 4 });
        await table.save();

        const foundTable = await Table.findOne({ table_no: 1 });
        expect(foundTable.used_date).toBe('2022-01-01');
    });

   
});