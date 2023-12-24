const express = require("express");
const app = express();
const cors = require("cors");
//for controllers
const empcontroller = require("./controllers/employee_controller");
const invcontroller = require("./controllers/inventory_controller");

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
