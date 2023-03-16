const  mongoose = require("mongoose");

const studentRegistration = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

const studentRegister= new mongoose.model("Register",studentRegistration)

module.exports = studentRegister