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

///for the get employeee function
router.get('/getemployees',empcontroller.getEmp);

//for delete function
router.get('deleteemp',empcontroller.deleteEmp);

module.exports = router;