import React from 'react'

const SignUp = () => {
  return (
     <div className="bg-blue-500 w-full h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <form action="login" method="post" className="flex flex-col space-y-4">
            <input
            type="text"
            required
            name="username"
            placeholder="Name"
            className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="useremail"
            placeholder="Email Id"
            className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            name="userpassword"
            placeholder="Password"
            className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
          />

             <input
            type="password"
            name="reentereduserpassword"
            placeholder="Re-enter Password"
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
