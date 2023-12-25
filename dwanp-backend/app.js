const express = require('express');
const app = express();
const cors  = require('cors');
//for controllers
const empcontroller = require('./controllers/employee_controller');

//menu controller
const mencontroller = require('./controllers/menu_controller');


app.use(cors());
app.use(
    express.urlencoded({
        extended:true,
    })    
);

app.use(express.json());

///for cruds for each 
//meke ubala nama tyna thanat adala his ide ghpn wena ewage ghanna epa functions  comment eke tyna nama use krpn function ekatath
 
//employee - navindu
///getemployee
app.get('/getemployees',(req,res)=>
{
    var resobj = [];
    empcontroller.getEmp(req,res,next =>
        {
            res.send();
        });
}


);

///createemployee
app.post('/createemp',(req,res)=>
{
    empcontroller.addEmp(req.body,(callback)=>
        {
            res.send();


        }
    );

});


///updateemployee
app.post('/updateemp',(req,res)=>
{
    empcontroller.updateEmp(req,res,(callback)=>
    {
        res.send(callback);


    }

    );
});

///delete employee
app.post('/deleteemp',(req,res)=>
{
    empcontroller.deleteEmp(req.body,(callback)=>
        {
            res.send(callback);


        }
    );
}


);

///////////////////////////////
//menu - aruni

//getmenu
app.get("/menu", (req, res) => {
    mencontroller.getMenu((req, res, next) => {
     res.send();
    });
});

//createmenu
app.post("/createmenu", (req, res) => {
    mencontroller.addMenu(req.body, (callback) => {
     res.send();
    });
});


//deletemenu
app.post('/deletemenu', (req, res) => {
    mencontroller.deleteMenu(req.body, (callback) => {
     res.send(callback);
    });
});

//updatemenu
app.post('/updatemenu', (req, res) => {
    mencontroller.updateMenu(req.body, (callback) => {
     res.send(callback);
    });
});


/////////////////////
//inventory - pasindu

//getinventory

//createinventory

//deleteinventory

//updateinventory

/////////////////////
//order wish

//getoder

//createorder

//updateorder

//deleteorder

////////////////////

//table - dumindu

//gettableview


//addtable


//deletetable


//deletetable

///
module.exports = app;