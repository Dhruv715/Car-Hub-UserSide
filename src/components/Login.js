import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://carhub-car-selling-website-backend-1.onrender.com/user/Login', formData);
      const { status, message, token } = response.data;
      
      if (status === 'Success') {
        localStorage.setItem('token', token); 
        navigate('/'); 
      } else {
        console.error('Login Error:', message);
      }
    } catch (error) {
      console.error('Error logging in user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-black" style={{ width: '100%', height: '100vh'}}>
      <div className="w-full max-w-md bg-zinc-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-gray-400 text-center" style={{ fontFamily: 'Poppins' }}>
          Welcome Back
        </h2>
        <h1 className="text-3xl font-extrabold text-white text-center mt-5" style={{ fontFamily: 'Poppins' }}>
          Login to Your Account
        </h1>
        <form onSubmit={handleSubmit} className="mt-10 tripform">
          <div className="flex flex-col space-y-4">
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" 
              placeholder="Email Address" 
            />
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" 
              placeholder="Password" 
            />
          </div>
          <div className="flex w-full mt-6">
            <button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 px-4 focus:outline-none transition duration-300 ease-in-out"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
