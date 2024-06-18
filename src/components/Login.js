import React from 'react';

function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-black" style={{ width: '100%', height: '100vh'}}>
      <div className="w-full max-w-md bg-zinc-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-gray-400 text-center" style={{ fontFamily: 'Poppins' }}>
          Welcome Back
        </h2>
        <h1 className="text-3xl font-extrabold text-white text-center mt-5" style={{ fontFamily: 'Poppins' }}>
          Login to Your Account
        </h1>
        <form className="mt-10 tripform">
          <div className="flex flex-col space-y-4">
            <input 
              type="email" 
              className="w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" 
              placeholder="Email Address" 
            />
            <input 
              type="password" 
              className="w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" 
              placeholder="Password" 
            />
          </div>
          <div className="flex w-full mt-6">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 px-4 focus:outline-none transition duration-300 ease-in-out">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
