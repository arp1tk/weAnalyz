import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'user123') {
      navigate('/dashboard/user');
    }
    else if(username === 'team' && password ==='team123'){
      navigate('/dashboard/team')

    }
     else {
      alert('Invalid credentials : to login as user (username = user , password = user123),team(username =team , password = team123) ');
    }
  };

  return (
    <div className="w-screen h-screen bg-[#55d6c2] flex items-center justify-center">
      <div className="bg-[#EFEDED80] w-[1150px] h-[500px] p-18 px-60">
        <h2 className="text-center text-2xl font-bold italic py-2 mb-8 text-black">
          Helpdesk System
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-white placeholder-black mb-4 px-4 py-2 border border-gray-500 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 bg-white px-4 py-2 placeholder-black border border-gray-500 focus:outline-none"
        />

        <div className="flex items-center justify-center">
          <button
            onClick={handleLogin}
            className="w-60 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 mb-4"
          >
            Sign In
          </button>
        </div>

        <div className="flex justify-between px-20 py-10 text-sm">
          <Link to="/forgot" className="text-red-600 hover:underline">
            Forgot password
          </Link>
          <Link to="/signup" className="text-black font-normal hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
