const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
    table_no: Number,
    used_date: String,
    used_time: String,
    person_count: Number,
});

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;