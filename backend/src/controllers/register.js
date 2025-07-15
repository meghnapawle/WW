import mongoose from "mongoose";
import User from "../models/User.js";
import sendotp from "../utilis/sendotp.js";
import storeOtp from "../models/otp.js"
import bcrypt, { genSalt } from "bcrypt"
export const register = async (req, res) => {

  const { name, email, password } = req.body;

  try {
    const emailexist = await User.findOne({ email: email });
    if (emailexist)
      return res.json({ msg: "emailexists" });
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
   await bcrypt.genSalt(10, async (err, salt) =>{
     await  bcrypt.hash(password, salt, async  (err, hash)=> {
        const sent = sendotp(email, otp);
        const otpcreated = await storeOtp.create({ name: name, email: email, password: hash, otp: otp });
        if (sent && otpcreated) {

          
          return res.send("otp sent");
        }
      });
    });

  }
  catch (error) {
    return res.send(error);
  }
}


export default register;

