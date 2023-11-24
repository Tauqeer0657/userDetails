const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
    name : {
        type :String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : Number,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    cpassword : {
        type : String,
        required : true
    }
})

// we will create a new collection 
const userData = new mongoose.model("userData",userDataSchema);
module.exports = userData;