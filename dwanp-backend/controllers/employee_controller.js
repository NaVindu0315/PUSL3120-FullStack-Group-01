//navindu
/*const { response } = require('../app');

const Employees = require ('../models/employee_model');

//create employee


const addEmployee = (req,res,next)=>
{
    const Employees = new Employees(
        {
            id :  req.body.id,
            name: req.body.name,
        }
    );
    Employees.save()
    .then(response=>
        {
            res.json({response})
        })
        .catch(error=>{
            res.json({error})
        });
}

exports.addEmployee = addEmployee;

*/
