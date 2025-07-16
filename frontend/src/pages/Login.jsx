import React from "react";
 import {useState } from "react"
 import { useNavigate } from "react-router";

 import axios from "axios"


 
  




const Login = () => {
   const [msg , setmsg]=useState("")
   const [email,setemail]=useState("");
  const [password , setpassword]=useState("");
  const navigate = useNavigate("");
  const trylogin = async (e)=>{
        
       e.preventDefault();
     

         const res= await axios.post("http://localhost:3000/auth/login" , { email,password});

         if(res.data.status==201){
          setmsg("login succesfull");
          navigate('/');
         }
         
         setmsg(res.data.msg);
        
      


          
            
  };
  return (
    <div className="bg-zinc-500 w-full h-screen flex items-center justify-center">
      <div className="bg-cyan-100 p-8 rounded-lg shadow-lg">
        <form  method="post" className="flex flex-col space-y-4" onSubmit={trylogin}>
          <input
            type="email"
            name="useremail"
            value={email}
            onChange= {(e)=> {
            setemail(e.target.value);
            }}
            placeholder="Email Id"
            className="border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            name="userpassword"
            value={password}
             onChange= {(e)=> {
              setpassword(e.target.value);
            }}
            placeholder="Password"
            className="border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
          />

            <input type="submit" />
          
        </form>
        <div>{msg}</div>
      </div>
    </div>
  );
};

export default Login;
