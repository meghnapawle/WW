import React, { useState } from 'react'

const SignUp = () => {
const [name , setName]=useState();
const [email , setEmail ]=useState();
const [password,setPassword]=useState();
const [repassword,setRepassword]=useState();


const trysignup = async ()=>{
  
}

  return (
     <div className="bg-blue-500 w-full h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <form action="login" method="post" className="flex flex-col space-y-4">
            <input
            type="text"
            required
            name="username"
            placeholder="Name"
            value={name}
            onChange={e => {setName(e.target.value)}}
            className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="useremail"
            placeholder="Email Id"
            value={email}
            onChange={e => {setEmail(e.target.value)}}
            className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            name="userpassword"
            placeholder="Password"
            value={password}
            onChange={e => {setPassword(e.target.value)}}
            className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
          />

             <input
            type="password"
            name="reentereduserpassword"
            placeholder="Re-enter Password"
            value={repassword}
            onChange={e => {setRepassword(e.target.value)}}
            className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-4xl ml-12 mr-12 hover:bg-blue-700 transition duration-200">
            SignUp
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
