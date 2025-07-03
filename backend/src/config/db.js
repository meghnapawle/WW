 import mongoose from "mongoose"

 export const connectDB = async () => {
   try {
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
      console.log(" Dammmm, databse connect ho gaya ");
   }
   catch(error)
   {
    console.error("nahi connect hua ");
    process.exit(1);
   }
    }                                           