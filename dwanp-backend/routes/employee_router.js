//navindu
/*const express = require('express');
//creating router instance
const employeeRouter = express.Router();

const emplyeecontroller = require('../controllers/employee_controller');



employeeRouter.post('/createemployee',emplyeecontroller.addEmployee);*/

const express = require('express');
const router = express.Router();

const empcontroller  = require('../controllers/employee_controller');

router.post('/createemp',empcontroller.addEmp);

module.exports = router;