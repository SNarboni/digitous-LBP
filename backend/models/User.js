mongoose=require("mongoose");


const UserSchema = new mongoose.Schema({
    email:String,
    password:String,
    name:String,
    phone_Number:String,
    city:String
});

const UserModel = mongoose.model("User", UserSchema);
module.exports=UserModel;