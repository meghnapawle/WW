import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from "dotenv"
dotenv.config();
const app = express();
connectDB();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.get("/",(req,res)=>{
 res.status(200).send("hello raunak world");
})