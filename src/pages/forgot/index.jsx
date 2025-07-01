import React from 'react'
import { Link } from 'react-router-dom'
const Forgot = () => {
   return (
    <div className="w-screen h-screen bg-[#55d6c2] flex items-center justify-center">
      <div className="bg-[#EFEDED80] w-[1150px] h-[500px] p-18 px-60 ">
        <h2 className="text-center  py-2 mb-8 text-black">
         Don't worry, Enter your email below and we will<br/> send you a link to change password
        </h2>

       
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-6 bg-white px-4 py-2 placeholder-black border border-gray-500 focus:outline-none"
        />
<div className='flex flex-col items-center justify-center pt-6'>      
      <button className="w-60 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 mb-4">
        Submit
        </button>
              <Link to="/" className="w-60 text-center bg-blue-600 text-white py-2 rounded-xl  mb-4">
        Sign In
        </Link>
        </div>


       
      </div>
    </div>
  )
}

export default Forgot