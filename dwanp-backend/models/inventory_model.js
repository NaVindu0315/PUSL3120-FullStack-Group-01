//pasindu
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

const invSchema = new Schema({
  invnt_item: String,
  invnt_code: Number,
  qnty: Number,
  price: String,
  date: String,
});

const Inventory = mongoose.model("inventory", invSchema);
module.exports = Inventory;

//25-26 athre enna oni red clr eken lyla tyna tika nawidge sketch eke.
// controller eke hduwa function eka wenas kkrn oni itpse function 4 tika test krganna
//fiels tika wenas krgathata pse frontend eka wenas krnna(aluth feils tika ekathukrnna tyne)
