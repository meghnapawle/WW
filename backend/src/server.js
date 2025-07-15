import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from "dotenv"
import animalProfileRoutes from "./routes/animalProfileRoutes.js"
import quizRoutes from "./routes/quizRoutes.js"
import seaExplorationRoutes from "./routes/seaExplorationRoutes.js"
import rateLimiter from './middleware/rateLimiter.js';
import cors from "cors";
import authUser from "./routes/authUser.js"
import sendotp from "./utilis/sendotp.js"
// import { sendEmail } from './gmailapi.js';
dotenv.config(); 
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(rateLimiter);


app.use("/quiz",quizRoutes);
app.use("/explore",seaExplorationRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.get("/",(req,res)=>{
 res.status(200).send("hello raunak world");
});


app.use("/auth",authUser);