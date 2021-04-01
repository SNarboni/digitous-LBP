const mongoose=require("mongoose");


const ProductSchema = new mongoose.Schema({
    img:String,
    name:String,
    price:Number,
    description: String,
    city : String
});

const ProductModel = mongoose.model("product", ProductSchema);
module.exports=ProductModel;