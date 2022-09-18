import mongoose from "mongoose";

const bus_info=mongoose.Schema({
    bus_number:{
        type: String,
        unique: true,
        require: true,
    },
    bus_destination:{
        type: String,
        require: true,
    },
    bus_start:{
        type: String,
        require: true,
    },
    departue_time:{
        type: String,
        require: true,
    },
    arrival_time:{
        type: String,
        require: true,
    },
});

const register = new mongoose.model("Bus Information", bus_info);