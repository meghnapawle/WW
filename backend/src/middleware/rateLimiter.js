import ratelimit from "../config/upstash";


const  rateLimiter = async (req , res , next) =>{
try {
     const {success}= await ratelimit.limit();
     if(!success){
        return res.status(429).json({
            message : " too many requests"
        });
     }
     next();
} catch (error) {
    console.error("rate limit error",error);
    next(error);
}
}

export default rateLimiter;