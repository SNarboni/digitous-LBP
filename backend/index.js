const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const cors = require ("cors");
const fs = require("fs");
const multer  = require('multer');
const router = express.Router();
const path = require("path");
const upload = multer({ dest: 'public/uploads/' });
const config = require("./config");
const UserModel = require("./models/User");
const ProductModel= require("./models/Product");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { JsonWebTokenError } = require('jsonwebtoken');
const jwtsecret = "unsecretcool321";
const bcryptjs = require("bcryptjs");

mongoose.connect( "mongodb://localhost:27017/lebonplan",
{ useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB connected");
    }
  );


 app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(cors());


  app.post("/signup", upload.single("profilePicture"),async (req, res, next)=> {

    try {
        if(req.file){
          let myPP=fs.renameSync(
            req.file.path,
            path.join(req.file.destination, `${req.body.name}.png`)
          )
        }
        const newUser = new UserModel(
          {
            email:req.body.email,
            password: bcryptjs.hashSync(req.body.password),
            name:req.body.name,
            profilePicture:`uploads/${req.body.name}.png`

          }
        )
        await newUser.save()
        res.send("Utilisateur enregistré") 
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
      res.status(404).json({message : "l'utilisateur n'existe pas"}); 
     }
    if(user.password !== req.body.password){
      res.status(401).json({message : "mot de passe incorrect"});
     }else{

       const token = jwt.sign({email: user.email}, jwtsecret,  {expiresIn: 3600 });
       console.log("token", token);
        res.json({
          token: token,
          message: "tien le token"
        });
       }

   }catch (error){  
 
    console.error(error);
    res.status(404).json({error : error})
   }
});

app.get("/admin", (req, res)=>{
  const verifToken = req.headers.autorization.split("")[1];
  const verification = jwt.verify(verifToken, jwtsecret);
  console.log(verification);
  res.send(req.headers.autorization);
})

app.post("/AddProduct", async (req, res, next)=> {
  try {
      const newProduct = new ProductModel(req.body)
      await newProduct.save()
      res.send(newProduct)
  } catch (err) {
    res.status(400).send(err)
    console.error(err)
  }
});

app.post('/upload', upload.single('img'),  (req, res) => {
  console.log(req.file);
  fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));
  res.send("ok");
});
   


app.listen(port, () => {
  console.log('Server started on port: ' + port);
});