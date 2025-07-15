import express from "express"
import login from "../controllers/login.js"
import register from "../controllers/register.js"
import verifyOtp from "../controllers/verifyOtp.js";

const router=express.Router();

router.post("/create", register);
router.post("/verify-otp", verifyOtp);
router.post("/login",login);

export default router;