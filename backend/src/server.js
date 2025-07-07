import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from "dotenv"
import animalProfileRoutes from "./routes/animalProfileRoutes.js"
import quizRoutes from "./routes/quizRoutes.js"
import seaExplorationRoutes from "./routes/seaExplorationRoutes.js"
import rateLimiter from './middleware/rateLimiter.js';
import cors from "cors";

dotenv.config();
const app = express();
connectDB();
app.use(cors(
  {
    origin: "http://localost:5173"
  }
));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(rateLimiter);


app.use("/quiz",quizRoutes);
app.use("/explore",seaExplorationRoutes);

app.listen(5173, () => {
  console.log('Server is running on port 5173');
});
app.get("/",(req,res)=>{
 res.status(200).send("hello raunak world");
});
