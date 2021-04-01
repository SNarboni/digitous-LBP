const mongoose=require("mongoose");


const ProductSchema = new mongoose.Schema({
    
    name:String,
    price:Number,
    description: String,
});

const ProductModel = mongoose.model("product", ProductSchema);
module.exports=ProductModel;