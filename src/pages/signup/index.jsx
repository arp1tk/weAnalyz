import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className="w-screen h-screen bg-[#55d6c2] flex items-center justify-center">
      <div className="bg-[#EFEDED80] w-[1150px] h-[500px] p-12 px-60 ">
        <h2 className="text-center text-2xl font-bold italic  text-black">
          Helpdesk System
        </h2>
        < h2 className='text-center py-6 '>Sign up here</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full bg-white mb-4 px-4 placeholder-black py-2 border border-gray-500  focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 text-black placeholder-black bg-white px-4 py-2 border border-gray-500 focus:outline-none"
        />
                <input
          type="email"
          placeholder="Email"
          className="w-full mb-6 bg-white px-4 py-2 placeholder-black border border-gray-500 focus:outline-none"
        />
<div className='flex items-center justify-center'>        <button className="w-60 bg-blue-600 text-white py-2 rounded-xl  mb-4">
          Sign Up
        </button></div>


        <div className="flex justify-between px-20 py-10 text-sm">
          <Link to="/forgot" className="text-red-600 font-normal hover:underline">
            Forgot password
          </Link>
          <Link to="/" className="text-black text-black font-normal hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup