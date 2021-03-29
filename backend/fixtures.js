const mongoose=require('mongoose');
const config = require("./config")
const UserModel = require("./models/User")
const produitModel= require("./models/produit");



mongoose.connect(
    "mongodb://localhost:27017/lebonplan",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB connected");
    }
  );

  