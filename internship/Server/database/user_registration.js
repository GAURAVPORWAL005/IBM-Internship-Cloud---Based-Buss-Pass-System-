import mongoose from "mongoose";

const user_inforamtion = mongoose.Schema({
   name:{
        type : String ,
        require: true,
   },
    email: {
        type : String,
        require : true,
        unique: true,
    },
    password: {
        type : String,
        require :true,
    },
    phoneNo: {
        type : String,
        require :true,
    },
    amount_available: {
        type: String,
        deafult:  0,
    },
    validation: {
        type: String,
    },
    destination: {
        type: String,
    }
},{collection: 'register'})

const register = mongoose.model("Register", user_inforamtion);
export default register;