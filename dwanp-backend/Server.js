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