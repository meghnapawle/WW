import mongoose from "mongoose";


const animalProfileScheme= new mongoose.Schema({
    name :{
        type:String,
        required : true,
    },
    depth:{
        type:String,
        required : true,
    },

    
})