//aruni
//meke employeeschema wenuwt enna one ubala krana eka ex: orderSchema ,tableSchema
//const Employee wenuwt ubalage ex: Order,Tablereserver
//cll ekk dpn meka ghnna kalin

/*
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

///defining employee schema
const employeeSchema = new Schema(
    {
        id:Number,
        name : String,
    }
);
const Employee = mongoose.model('employees',employeeSchema);
module.exports = Employee;
*/


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menSchema = new Schema({
  menu_item_no: Number,
  menu_item_name: String,
  menu_item_price : String,
  potion : Number,
});

const Menu = mongoose.model("menu", menSchema);
module.exports = Menu;