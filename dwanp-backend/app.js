const express = require("express");
const app = express();
const cors = require("cors");
//for controllers

//pasindu
const invcontroller = require("./controllers/inventory_controller");

//table controller
const tablecontroller = require("./controllers/table_controller")

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
  );

const empcontroller = require('./controllers/employee_controller');

//menu controller
const mencontroller = require('./controllers/menu_controller');





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
app.post("/createemp", (req, res) => {
  empcontroller.addEmp(req.body, (callback) => {
    res.send();
  });
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
app.get("/inventory", (req, res) => {
  invcontroller.getInventory((req, res, next) => {
    res.send();
  });
});

//createinventory
app.post("/createinventory", (req, res) => {
  invcontroller.addInventory(req.body, (callback) => {
    res.send();
  });
});

//deleteinventory
app.post("/deleteinventory", (req, res) => {
  invcontroller.deleteInventory(req.body, (callback) => {
    res.send(callback);
  });
});

//updateinventory
app.post("/updateinventory", (req, res) => {
  invcontroller.updateInventory(req.body, (callback) => {
    res.send(callback);
  });
});

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

//gettables
app.get('/tables', (req,res) => {
  tablecontroller.getTables((req, res, next) =>{
      res.send();
  });
});

//addtable
app.post('/addtable', (req,res) => {
  tablecontroller.addTable(req.body, (callack) =>{
      res.send();
  });
});

//updatetable
app.post('/updatetable', (req,res) => {
  tablecontroller.updateTable(req.body, (callack) =>{
      res.send(callack);
  });
});

//deletetable
app.post('/deletetable', (req,res) => {
  tablecontroller.deleteTable(req.body, (callack) =>{
      res.send(callack);
  });
});

///
module.exports = app;
