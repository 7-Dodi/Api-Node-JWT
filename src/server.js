require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/', (req, res)=>{
    res.status(200).send("Hello World");
})

app.listen(3000, ()=>{
    console.log("Server runnig in port 3000");
})