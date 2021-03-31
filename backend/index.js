const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const cors = require ("cors");
const config = require("./config");
const UserModel = require("./models/User");
const productModel= require("./models/product");

const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");
const { JsonWebTokenError } = require('jsonwebtoken');
const bcrypt = require("bcrypt");


mongoose.connect( "mongodb://localhost:27017/lebonplan",
{ useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB connected");
    }
  );


  // app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(cors());


  app.post("/signup", async (req, res, next)=> {
    try {
        const newUser = new UserModel(req.body)
        await newUser.save()
        res.send(newUser)
    } catch (err) {
      res.status(400).send(err)
      console.error(err)
    }
  });

  app.post("/login", async (req, res, next) =>{
   try{
    const user =await UserModel.findOne({
      email: req.body.email,
    })
   // console.log(user);
     if(user === null){
       return res.status(404).send("l'utilisateur n'existe pas"); 
     }
    if(user.password !== req.body.password){
       return res.status(401).json("mot de passe incorrect");
     }else{

       const token = jwt.sign({email: user.email}, "unsecretcool321",  {expiresIn: 3600 });
       console.log("token", token);
       return res.json(token);
       }

   }catch (err){  
 
    console.error(err);
    res.status(404).send(err)
   }
});

app.get("/admin", (req, res)=>{
  console.log(req.header.Autorization);
  res.send(req.header.Autorization);
})



app.listen(port, () => {
  console.log('Server started on port: ' + port);
});