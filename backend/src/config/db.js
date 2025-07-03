 import mongoose from "mongoose"
import dotenv from "dotenv"

 export const connectDB = async () => {
   try {
     await mongoose.connect(process.env.MONGO_URI);
      console.log(" Dammmm, databse connect ho gaya ");
   }
   catch(error)
   {
    console.error("nahi connect hua ");
    process.exit(1);
   }
    }                                           