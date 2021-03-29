const express = require('express');
const app = express();
const config = require("./config")
const UserModel = require("./models/User")
const produitModel= require("./models/produit");

const mongoose = require('mongoose');

const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

mongoose.connect(
    "mongodb://localhost:27017/lebonplan",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB connected");
    }
  );

app.get("/",(req, res, nex)=>{
  res.send("home")
})

app.get("/",(req, res, nex)=>{
  res.send("home")
})


app.listen(config.PORT, () => {
  console.log('Server started on port: ' + PORT);
});