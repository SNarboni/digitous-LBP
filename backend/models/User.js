const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minLength: 8,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    phoneNumber: String,

    city: {
        type: String,
    },
    profilePicture:String
});

const UserModel = mongoose.model("User", UserSchema);
module.exports=UserModel;