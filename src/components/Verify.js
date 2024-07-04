import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';

function Verify() {
  const [formData, setFormData] = useState({
    email: '',
    otp: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.otp) {
      newErrors.otp = 'OTP is required';
    } else if (!/^\d{6}$/.test(formData.otp)) {
      newErrors.otp = 'OTP must be exactly 6 digits';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true); // Start loading

    try {
      await axios.post('https://carhub-car-selling-website-backend-1.onrender.com/user/VerifyOTP', formData);
      navigate('/login'); // Redirect to login page on successful verification
    } catch (error) {
      console.error('Error verifying user:', error);
      setErrors({ ...errors, submit: 'Verification failed. Please try again.' });
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-black" style={{ width: '100%', height: '100vh'}}>
      <div className="w-full max-w-md bg-zinc-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-gray-400 text-center" style={{ fontFamily: 'Poppins' }}>
          Verify Your Account
        </h2>
        <h1 className="text-3xl font-extrabold text-white text-center mt-5" style={{ fontFamily: 'Poppins' }}>
          Enter OTP
        </h1>
        <form onSubmit={handleSubmit} className="mt-10 tripform">
          <div className="flex flex-col space-y-4">
            <div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600 ${errors.email && 'border-red-500'}`} 
                placeholder="Email Address" 
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <input 
                type="text" 
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                className={`w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600 ${errors.otp && 'border-red-500'}`} 
                placeholder="OTP" 
              />
              {errors.otp && <p className="text-red-500 text-sm">{errors.otp}</p>}
            </div>
          </div>
          {errors.submit && <p className="text-red-500 text-sm mt-4 text-center">{errors.submit}</p>}
          <div className="flex w-full mt-6">
            <button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 px-4 focus:outline-none transition duration-300 ease-in-out flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Circles height="24" width="24" color="#FFFFFF" ariaLabel="circles-loading" visible={true} />
                  <span className="ml-2">Verifying...</span>
                </>
              ) : (
                'Verify'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Verify;
