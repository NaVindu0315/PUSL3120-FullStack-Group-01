//navindu
const express = require('express');
//creating router instance
const employeeRouter = express.Router();
const emplyeecontroller = require('./controllers/employee_controller');

employeeRouter.post('/createemployee',emplyeecontroller.addEmployee);