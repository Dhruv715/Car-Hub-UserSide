import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

function ChangePwd() {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false); // State for old password visibility
  const [showNewPassword, setShowNewPassword] = useState(false); // State for new password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/'); // Redirect to '/' if token is not found
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const togglePasswordVisibility = (field) => {
    switch (field) {
      case 'oldPassword':
        setShowOldPassword(!showOldPassword);
        break;
      case 'newPassword':
        setShowNewPassword(!showNewPassword);
        break;
      case 'confirmPassword':
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.oldPassword) {
      newErrors.oldPassword = 'Old password is required';
    }
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm new password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
  
    try {
      const token = localStorage.getItem('token');
      const { oldPassword, newPassword } = formData; // Extract old and new passwords
      const payload = {
        currentPassword: oldPassword,
        newPassword: newPassword
      };
  
      const response = await axios.post('https://carhub-car-selling-website-backend-1.onrender.com/user/ChangePwd', payload, {
        headers: {
          auth: token
        }
      });
  
      const { status, message } = response.data;
      if (status === 'Success') {
        localStorage.removeItem('token');
        navigate('/login');

      } else {
        alert(message);
      }
    } catch (error) {
      console.error('Error changing password:', error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-black" style={{ width: '100%', height: '100vh' }}>
      <div className="w-full max-w-md bg-zinc-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-white text-center mb-5" style={{ fontFamily: 'Poppins' }}>
          Change Password
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <input
                type={showOldPassword ? 'text' : 'password'}
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                className={`w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600 ${errors.oldPassword && 'border-red-500'}`}
                placeholder="Old Password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('oldPassword')}
                className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
              >
                {showOldPassword ? (
                  <EyeOffIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                ) : (
                  <EyeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                )}
              </button>
              {errors.oldPassword && <p className="text-red-500 text-sm">{errors.oldPassword}</p>}
            </div>
            <div className="relative">
              <input
                type={showNewPassword ? 'text' : 'password'}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className={`w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600 ${errors.newPassword && 'border-red-500'}`}
                placeholder="New Password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('newPassword')}
                className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
              >
                {showNewPassword ? (
                  <EyeOffIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                ) : (
                  <EyeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                )}
              </button>
              {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword}</p>}
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600 ${errors.confirmPassword && 'border-red-500'}`}
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('confirmPassword')}
                className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
              >
                {showConfirmPassword ? (
                  <EyeOffIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                ) : (
                  <EyeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                )}
              </button>
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
          </div>
          <div className="flex w-full mt-6">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 px-4 focus:outline-none transition duration-300 ease-in-out flex items-center justify-center"
            >
              {loading ? 'Changing Password...' : 'Change Password'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePwd;
