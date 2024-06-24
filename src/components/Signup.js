import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    profileImage: null
  });

  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const userData = new FormData();
    userData.append('username', formData.username);
    userData.append('email', formData.email);
    userData.append('mobileNumber', formData.mobileNumber);
    userData.append('password', formData.password);
    userData.append('confirmPassword', formData.confirmPassword);
    userData.append('profileImage', formData.profileImage);

    try {
      await axios.post('https://carhub-car-selling-website-backend-1.onrender.com/user/Signup', userData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/verify');
    } catch (error) {
      console.error('Error signing up user:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-black" style={{ width: '100%', height: '100vh' }}>
      <div className="w-full max-w-md bg-zinc-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-gray-400 text-center" style={{ fontFamily: 'Poppins' }}>
          Join Us
        </h2>
        <h1 className="text-3xl font-extrabold text-white text-center mt-5" style={{ fontFamily: 'Poppins' }}>
          Create Your Account
        </h1>
        <form onSubmit={handleSubmit} className="mt-10 tripform">
          <div className="flex flex-col space-y-4">
            <input 
              type="text" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" 
              placeholder="Username" 
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" 
              placeholder="Email Address" 
            />
            <input 
              type="tel" 
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" 
              placeholder="Mobile Number" 
            />
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" 
              placeholder="Password" 
            />
            <input 
              type="password" 
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" 
              placeholder="Confirm Password" 
            />
            <input 
              type="file" 
              name="profileImage"
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" 
              placeholder="Profile Image" 
            />
          </div>
          <div className="flex w-full mt-6">
            <button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 px-4 focus:outline-none transition duration-300 ease-in-out"
            >
              {loading ? (
                <Circles
                  height="24"
                  width="24"
                  color="#FFFFFF"
                  ariaLabel="circles-loading"
                  visible={true}
                />
              ) : (
                'Sign Up'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
