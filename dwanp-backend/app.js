const express = require('express');
const app = express();
const cors  = require('cors');
//for controllers
const empcontroller = require('./controllers/employee_controller');






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

//createmenu

//deletemenu

//updatemenu

/////////////////////
//inventory - pasindu

//getinventory

//createinventory

//deleteinventory

//updateinventory

/////////////////////
//order wish

//getoder
app.get('/order', (req,res) => {
    controller.getOrder((req, res, next) =>{
        res.send();
    });
});
//createorder
app.post('/createorder', (req,res) => {
    controller.addOrder(req.body, (callack) =>{
        res.send();
    });
});
//updateorder
app.post('/updateorder', (req,res) => {
    controller.updateOrder(req.body, (callack) =>{
        res.send(callack);
    });
});
//deleteorder
app.post('/deleteorder', (req,res) => {
    controller.deleteOrder(req.body, (callack) =>{
        res.send(callack);
    });
});
////////////////////

//table - dumindu

//gettableview


//addtable


//deletetable


//deletetable

///
module.exports = app;