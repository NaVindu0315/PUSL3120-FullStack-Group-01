//wish
//meke employeeschema wenuwt enna one ubala krana eka ex: orderSchema ,tableSchema
//const Employee wenuwt ubalage ex: Order,Tablereserver
//cll ekk dpn meka ghnna kalin


const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

///defining employee schema
const orderSchema = new Schema(
    {
        Orderid:Number,
        name : String,
    }
);
const Order = mongoose.model('Order',orderSchema);
module.exports = Order;
