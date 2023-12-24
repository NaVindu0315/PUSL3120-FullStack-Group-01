const express = require('express');
const app = express();
const cors  = require('cors');
//for controllers
const empcontroller = require('./controllers/employee_controller');

//menu controller
const menu_controller = require('./controllers/menu_controller');


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


///delete employee


///////////////////////////////
//menu - aruni

//getmenu
app.get("/menu", (req, res) => {
    mencontroller.getMenu((req, res, next) => {
     res.send();
    });
});

//createmenu
app.post("/creatmenu", (req, res) => {
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
    controller.updateMenu(req.body, (callback) => {
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