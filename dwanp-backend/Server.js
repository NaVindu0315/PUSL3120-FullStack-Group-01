//port 
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
//to import routers
// adala cmnt ekat ytin line eke router path dapan adala thana
//menu

//inventory

//order

//employee

//table

app.use(cors());
app.use(express.json());
//username for the db navindu0315
//password dwanp5

//creating the db connection string
//meka chnge krnna epa
const uri ="mongodb+srv://navindu0315:dwanp5@dwanp.2xoqrcy.mongodb.net/?retryWrites=true&w=majority"