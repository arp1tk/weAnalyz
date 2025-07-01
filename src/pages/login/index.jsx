import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="w-screen h-screen bg-[#55d6c2] flex items-center justify-center">
      <div className="bg-[#EFEDED80] w-[1150px] h-[500px] p-18 px-60 ">
        <h2 className="text-center text-2xl font-bold italic py-2 mb-8 text-black">
          Helpdesk System
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full bg-white placeholder-black mb-4 px-4 py-2 border border-gray-500  focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 bg-white px-4 py-2 placeholder-black border border-gray-500 focus:outline-none"
        />
<div className='flex items-center justify-center'>        <button className="w-60 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 mb-4">
          Sign In
        </button></div>


        <div className="flex justify-between px-20 py-10 text-sm">
          <Link to="/forgot" className="text-red-600 hover:underline">
            Forgot password
          </Link>
          <Link to="/signup" className="text-black text-black font-normal hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
