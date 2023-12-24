//port
const port = 3001;
const host = "localhost";
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const emprouter = require("./routes/employee_router");

//to import routers

// adala cmnt ekat ytin line eke router path dapan adala thana
//menu

//inventory
const invrouter = require("./routes/inventory_router");

//order

//employee

//table

app.use(cors());
app.use(express.json());
//username for the db navindu0315
//password dwanp5

//creating the db connection string
//meka chnge krnna epa
const uri =
  "mongodb+srv://navindu0315:dwanp5@dwanp.2xoqrcy.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("mongodb error ", error);
  }
};

connect();
const server = app.listen(port, host, () => {
  console.log("Node server is listenging to ", server.address().port);
});

app.use("/api", emprouter);
app.use("/api", invrouter);
