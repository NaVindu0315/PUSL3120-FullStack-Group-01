const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    mobile: {
        type: Number
    },
    address: {
        type: String
    },
    bday: {
        type: Date
    }
    }, {
        collection: 'customers'
    })

module.exports = mongoose.model('Customer', customerSchema)