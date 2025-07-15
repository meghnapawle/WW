import storeOtp from "../models/otp.js"
import User
 from "../models/User.js";

  const generateToken = (email) => {
        return jwt.sign({ id: email }, process.env.JWT_SECRET, {
            expiresIn: "1h", 
        });
    };

const verifyOtp =async (req,res)=>{
const{email,otp } =req.body;
const data = await storeOtp.findOne({email:email});
if(!data){
  return res.send("otp expired");
}

if(otp!=data.otp){
  return res.send("invalid otp" + data.otp);
}

const usercreated = await User.create( {name :data.name,email:data.email,password:data.password});

 const token = generateToken(email);

      res.cookie("token", token, {
    httpOnly: true,       
    // secure: true,         
    sameSite: "strict",   
    maxAge: 3600000       
  });

return res.send(usercreated);


};
export default verifyOtp;