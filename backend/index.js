const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const cors = require ("cors");
const config = require("./config")
const UserModel = require("./models/User")
const productModel= require("./models/product");

const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

mongoose.connect(
    "mongodb://localhost:27017/lebonplan",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB connected");
    }
  );

  // app.use(express.static('public'));
  app.use(bodyParser.json());
  // app.use(cors());


  app.post("/signup", async (req, res, next)=> {
    try {
        console.log(req.body)
        const newUser = new UserModel(req.body)
        await newUser.save()
        res.send(newUser)
    } catch (err) {
      res.status(400).send(err)
      console.error(err)
    }
  });

/*
  app.post("/login", async (req, res) => {
    const user = await userModel
      .findOne({
        username: req.body.username,
      })
      .exec();
  
    if (bcryptjs.compareSync(req.body.password, user.password)) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        config.secret,
        {
          expiresIn: 3600,
        }
      );
  
      res.status(200).json({
        message: "Connection ok",
        token: token,
      });
    } else {
      res.status(401).send("Invalid password");
    }
  });*/



app.listen(port, () => {
  console.log('Server started on port: ' + port);
});