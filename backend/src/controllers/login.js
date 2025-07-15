import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser"

    const generateToken = (email) => {
        return jwt.sign({ id: email }, process.env.JWT_SECRET, {
            expiresIn: "1h", 
        });
    };

const login = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
        return res.json({ msg: " email not found" });
    }


    const passwordcheck = await bcrypt.compare(password, user.password);
    if (!passwordcheck) {
        return res.json({ msg: "incorrect password" });
    }
    const token = generateToken(email);

      res.cookie("token", token, {
    httpOnly: true,       
    // secure: true,         
    sameSite: "strict",   
    maxAge: 3600000       
  });

    return res.json({msg:"login succesful"});

}
export default login;