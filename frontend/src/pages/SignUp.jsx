// // import React, { useRef, useState } from 'react'

// // const SignUp = () => {
// // const [name , setName]=useState();
// // const [email , setEmail ]=useState();
// // const [password,setPassword]=useState();
// // const [repassword,setRepassword]=useState();
// // const [otp , setotp]=useState(false);
// // const divref =useRef();


// // const trysignup = async (e)=>{
          
// //        e.preventDefault();
     

// //          const res= await axios.post("http://localhost:3000/auth/create" , { name , email ,password });

// //          if(res.data.status==201){
// //           setotp(true);
// //          }      
                 
// //   };


// //   return (
// //      <div className="bg-blue-500 w-full h-screen flex items-center justify-center">
// //       <div className="bg-white p-8 rounded-lg shadow-lg">
// //        if(otp!){
// //         <form action="signup" method="post" onSubmit={trysignup} className="flex flex-col space-y-4">
// //             <input
// //             type="text"
// //             required
// //             name="username"
// //             placeholder="Name"
// //             value={name}
// //             onChange={e => {setName(e.target.value)}}
// //             className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
// //           />
// //           <input
// //             type="email"
// //             name="useremail"
// //             placeholder="Email Id"
// //             value={email}
// //             onChange={e => {setEmail(e.target.value)}}
// //             className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
// //           />
// //           <input
// //             type="password"
// //             name="userpassword"
// //             placeholder="Password"
// //             value={password}
// //             onChange={e => {setPassword(e.target.value)}}
// //             className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
// //           />

// //              <input
// //             type="password"
// //             name="reentereduserpassword"
// //             placeholder="Re-enter Password"
// //             value={repassword}
// //             onChange={e => {setRepassword(e.target.value)}}
// //             className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
// //           />
// //           <button  className="bg-blue-600 text-white px-4 py-2 rounded-4xl ml-12 mr-12 hover:bg-blue-700 transition duration-200">
// //             <a href="/">signup</a>
// //           </button>
// //         </form>
// // }
// // else {

  
// // }
// //       </div>
// //     </div>
// //   )
// // }

// // export default SignUp




// import React, { useState } from 'react';
// import axios from 'axios';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [repassword, setRepassword] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [message, setMessage] = useState('');

//   const trysignup = async (e) => {
//     e.preventDefault();

//     if (password !== repassword) {
//       setMessage("Passwords do not match.");
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:3000/auth/create', {
//         name,
//         email,
//         password,
//       });

//       if (res.data.status === 201) {
//         setOtpSent(true);
//         setMessage('OTP sent to your email.');
//       } else {
//         setMessage(res.json.msg);
//       }
//     } catch (err) {
//       setMessage('Error: ' + err.response?.data?.message || err.message);
//     }
//   };

//   const verifyOtp = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post('http://localhost:3000/auth/verify-otp', {
//         email,
//         otp,
//       });

//       if (res.data.status === 200) {
//         setMessage('Signup successful. You can now login.');
//         setOtpSent(false);
//         // redirect or clear form here
//       } else {
//         setMessage(res.data.message || 'OTP verification failed');
//       }
//     } catch (err) {
//       setMessage('Error: ' + err.response?.data?.message || err.message);
//     }
//   };

//   return (
//     <div className="bg-blue-500 w-full h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         {otpSent ? (
//           <form onSubmit={verifyOtp} className="flex flex-col space-y-4">
//             <h2 className="text-xl font-semibold text-center">Enter OTP</h2>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
//               required
//             />
//             <button
//               type="submit"
//               className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition duration-200"
//             >
//               Verify OTP
//             </button>
//           </form>
//         ) : (
//           <form onSubmit={trysignup} className="flex flex-col space-y-4">
//             <h2 className="text-xl font-semibold text-center">Sign Up</h2>
//             <input
//               type="text"
//               required
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
//             />
//             <input
//               type="email"
//               required
//               placeholder="Email Id"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
//             />
//             <input
//               type="password"
//               required
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
//             />
//             <input
//               type="password"
//               required
//               placeholder="Re-enter Password"
//               value={repassword}
//               onChange={(e) => setRepassword(e.target.value)}
//               className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition duration-200"
//             >
//               Sign Up
//             </button>
//           </form>
//         )}
//         {message && <p className="mt-4 text-center text-red-600">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default SignUp;



import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router"

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [message, setMessage] = useState('');
 

  const trysignup = async (e) => {
    e.preventDefault();

    if (password !== repassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/auth/create', {
        name,
        email,
        password,
      });

      if (res.status === 201) {
        setShowOtpInput(true);
        setMessage('OTP sent to your email.');
      } else {
        setMessage(res.data.msg || 'Signup failed');
      }
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Error sending signup request.');
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/auth/verify-otp', {
        email,
        otp,
      });

      if (res.status === 200) {
        setMessage('Signup complete. You can now log in.');
        setShowOtpInput(false);
        // Optionally redirect or reset form here
        
      } else {
        setMessage(res.data.msg || 'OTP verification failed.');
      }
    } catch (err) {
      setMessage(err.response?.data?.msg || 'OTP verification error.');
    }
  };

  return (
    <div className="bg-blue-500 w-full h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {showOtpInput ? (
          <form action ="/" onSubmit={verifyOtp} className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold text-center">Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border-2 border-gray-400 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition duration-200"
            >
              Verify OTP
            </button>
          </form>
        ) : (
          <form onSubmit={trysignup} className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold text-center">Sign Up</h2>
            <input
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-400 rounded-2xl px-4 py-2"
            />
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-400 rounded-2xl px-4 py-2"
            />
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-gray-400 rounded-2xl px-4 py-2"
            />
            <input
              type="password"
              required
              placeholder="Re-enter Password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              className="border-2 border-gray-400 rounded-2xl px-4 py-2"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>
          </form>
        )}

        {message && <p className="mt-4 text-center text-red-600">{message}</p>}
      </div>
    </div>
  );
};

export default SignUp;
