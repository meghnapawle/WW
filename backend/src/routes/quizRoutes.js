import express from "express";

const router =express.Router();

router.get("/", (req,res)=>{
 res.render("./frontend/quiz.html")
})
export default router;