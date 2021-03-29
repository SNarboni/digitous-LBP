const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const config = require("./config")
const UserModel = require("./models/User")
const productModel= require("./models/product");

const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

mongoose.connect(
    "mongodb://localhost:27017/lebonplan",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB connected");
    }
  );

  app.use(express.static('public'));
  app.use(bodyParser.json())
  app.use(cors());


app.listen(config.PORT, () => {
  console.log('Server started on port: ' + PORT);
});