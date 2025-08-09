import React, { useContext, useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Account created successfully!");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Logged in successfully!");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-[90%] sm:max-w-96 bg-white rounded-lg shadow-lg p-8 mt-10">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-4 text-gray-800"
        >
          <div className="inline-flex items-center gap-2 mb-2 mt-2">
            <p className="prata-regular text-3xl bg-golden-brown bg-clip-text text-transparent bg-to-b">
              {currentState}
            </p>
            <hr className="border-none h-[1.5px] w-8 bg-golden-brown" />
          </div>
          {currentState === "Login" ? null : (
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Name"
              required
            />
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Password"
            required
          />
          <div className="w-full flex justify-between text-sm mt-[-8px]">
            <p
              className="cursor-pointer bg-golden-brown bg-clip-text text-transparent bg-to-b"
              onClick={() => navigate("forgot-password")}
            >
              Forgot your password?
            </p>
            {currentState === "Login" ? (
              <p
                onClick={() => setCurrentState("Sign Up")}
                className="cursor-pointer bg-golden-brown bg-clip-text text-transparent bg-to-b"
              >
                Create account
              </p>
            ) : (
              <p
                onClick={() => setCurrentState("Login")}
                className="cursor-pointer bg-golden-brown bg-clip-text text-transparent bg-to-b"
              >
                Login Here
              </p>
            )}
          </div>
          <button
            className="border border-golden-brown text-golden-brown px-8 py-3 text-sm rounded hover:bg-golden-brown hover:text-white transition-all duration-500 bg-[#fff] mt-2"
            type="submit"
          >
            {currentState === "Login" ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="my-6">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              try {
                // Send token to backend for verification and user creation/login
                const response = await axios.post(
                  backendUrl + "/api/user/google-auth",
                  { token: credentialResponse.credential }
                );
                if (response.data.success) {
                  setToken(response.data.token);
                  localStorage.setItem("token", response.data.token);
                  toast.success("Logged in with Google!");
                } else {
                  toast.error(response.data.message || "Google login failed");
                }
              } catch (err) {
                toast.error("Google login failed");
              }
            }}
            onError={() => toast.error("Google login failed")}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Login = () => {

//   const [currentState, setCurrentState] = useState('Login');
//   const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

//   const [name,setName] = useState('')
//   const [password,setPasword] = useState('')
//   const [email,setEmail] = useState('')

//   const onSubmitHandler = async (event) => {
//       event.preventDefault();
//       try {
//         if (currentState === 'Sign Up') {

//           const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
//           if (response.data.success) {
//             setToken(response.data.token)
//             localStorage.setItem('token',response.data.token)
//           } else {
//             toast.error(response.data.message)
//           }

//         } else {

//           const response = await axios.post(backendUrl + '/api/user/login', {email,password})
//           if (response.data.success) {
//             setToken(response.data.token)
//             localStorage.setItem('token',response.data.token)
//           } else {
//             toast.error(response.data.message)
//           }

//         }

//       } catch (error) {
//         console.log(error)
//         toast.error(error.message)
//       }
//   }

//   useEffect(()=>{
//     if (token) {
//       navigate('/')
//     }
//   },[token])

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//         <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//             <p className='prata-regular text-3xl bg-golden-brown bg-clip-text text-transparent bg-to-b'>{currentState}</p>
//             <hr className='border-none h-[1.5px] w-8 bg-white' />
//         </div>
//         {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
//         <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
//         <input onChange={(e)=>setPasword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
//         <div className='w-full flex justify-between text-sm mt-[-8px]'>
//             <p className=' cursor-pointer bg-golden-brown bg-clip-text text-transparent bg-to-b' onClick={() => navigate('forgot-password')}>Forgot your password?</p>
//             {
//               currentState === 'Login'
//               ? <p onClick={()=>setCurrentState('Sign Up')} className=' cursor-pointer  bg-golden-brown bg-clip-text text-transparent bg-to-b'>Create account</p>
//               : <p onClick={()=>setCurrentState('Login')} className=' cursor-pointer  bg-golden-brown bg-clip-text text-transparent bg-to-b'>Login Here</p>
//             }
//         </div>
//         <button className='border border-white text-white px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 bg-[#333333]'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
//     </form>
//   )
// }

// export default Login
