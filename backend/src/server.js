import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from "dotenv"
import animalProfileRoutes from "./routes/animalProfileRoutes.js"
import quizRoutes from "./routes/quizRoutes.js"
import seaExplorationRoutes from "./routes/seaExplorationRoutes.js"

dotenv.config();
const app = express();
connectDB();
app.use("/quiz",quizRoutes);
app.use("/explore",seaExplorationRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.get("/",(req,res)=>{
 res.status(200).send("hello raunak world");
})
app.use