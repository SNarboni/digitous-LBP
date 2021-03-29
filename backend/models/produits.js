mongoose=require("mongoose");


const produitSchema = new mongoose.Schema({
    email:String,
    password:String,
    
});

const produitModel = mongoose.model("produit", produitSchema);
module.exports=produitModel;