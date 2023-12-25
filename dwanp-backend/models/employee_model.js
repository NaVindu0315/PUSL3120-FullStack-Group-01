//navindu
/*const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

///defining employee schema
const employeeSchema = new Schema(
    {
        id:Number,
        name : String,
    }
);
const Employees = mongoose.model('employees',employeeSchema);
module.exports = Employees;*/


const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const empSchema = new Schema(
    {
       // id :Number,
        //name : String,
        emp_code:Number,
        emp_name:String,
        bdate :String,
        nic : Number,
        adrs : String,
        tel : Number,
        civil:String,

    }
);

const Emp = mongoose.model('employees',empSchema);
module.exports = Emp;
