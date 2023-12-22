//navindu
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