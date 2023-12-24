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

const { response } = require('../app');
const empSchema = require('../models/employee_model');

///creating
 const addEmp = (req,res,next)=>
 {
    const emp = new empSchema(
        {
            id:req.body.id,
            name:req.body.name,
        }
    );
    emp.save()
        .then(
            response=>
            {
                res.json({response})
            }
        )
        .catch(
            error=>
            {
                res.json({error})
            }
        );
 }

 //to get the employees from the db
    const getEmp = (req,res,next) =>
    {
        empSchema.find()
        .then(response=>
            {
                res.json({response})
            })
            .catch(error=>{
                res.json({error})
            });
    }


    ///delete employee function

    const deleteEmp = (req,res,next)=>
    {
        const id = req.body.id;
        empSchema.deleteOne({id:id})
        .then(response=>
            {
                res.json({response})
            })
            .catch(error=>{
                res.json({error})
            });
    }

    //updating employee
    const updateEmp= (req,res,next)=>
    {
        //object destructing 
        const {id,name}=req.body;
        //in this the {id:id}first id should from db and scnd from the parsing data //need to be checked
        empSchema.updateOne({id:id},{$set : {name:name}})
        .then(response=>
            {
                res.json({response})
            })
            .catch(error=>{
                res.json({error})
            });
    

    }




 exports.addEmp = addEmp;
 exports.getEmp = getEmp;
 exports.deleteEmp = deleteEmp;
