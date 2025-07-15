import mongoose from "mongoose";

const otp = new mongoose.Schema({
      name : {
        type : String,
        required : true
    } ,
    email:  {
        type : String,
        required : true
    } ,
    password :  {
        type : String,
        required : true
    } ,
    otp :{
        type:Number,
        required:true
    },
    createdAt: {
        type:Date,
        default:Date.now,
        expires:300
    }
})

export default mongoose.model("storeOtp",otp);