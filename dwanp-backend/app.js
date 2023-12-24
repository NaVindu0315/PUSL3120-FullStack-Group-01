const express = require("express");
const app = express();
const cors = require("cors");
//for controllers
const empcontroller = require("./controllers/employee_controller");

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

///for cruds for each
//meke ubala nama tyna thanat adala his ide ghpn wena ewage ghanna epa functions  comment eke tyna nama use krpn function ekatath

//employee - navindu
///getemployee

///createemployee
app.post("/createemp", (req, res) => {
  empcontroller.addEmp(req.body, (callback) => {
    res.send();
  });
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
app.get("/inventory", (req, res) => {
  inventory_controller.getInventory((req, res, next) => {
    res.send();
  });
});

//createinventory
app.post("/createinventory", (req, res) => {
  inventory_controller.addInventory(req.body, (callback) => {
    res.send();
  });
});

//deleteinventory

//updateinventory
app.post("/updateinventory", (req, res) => {
  inventory_controller.updateInventory(req.body, (callack) => {
    res.send(callack);
  });
});

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
