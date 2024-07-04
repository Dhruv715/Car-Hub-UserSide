import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('https://carhub-car-selling-website-backend-1.onrender.com/user/getData', {
        headers: {
          'auth': token
        }
      })
      .then(response => {
        if (response.data.status === 'Success') {
          setUser(response.data.Data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const handleChangePassword = () => {
    navigate('/changePwd');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-black text-white">
        <TailSpin
          height={80}
          width={80}
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
        />
      </div>
    );
  }

  if (!user) {
    return <div className="flex justify-center items-center min-h-screen w-full bg-black text-white">User not found</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-black" style={{ width: '100%', height: '100vh' }}>
      <div className="w-full max-w-md bg-zinc-800 p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src={`https://carhub-car-selling-website-backend-1.onrender.com/images/${user.profileImage}`}
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-lg"
          />
          <h2 className="mt-4 text-2xl font-semibold text-white text-center" style={{ fontFamily: 'Poppins' }}>
            {user.username || 'User'}
          </h2>
          <p className="text-gray-400 text-center" style={{ fontFamily: 'Poppins' }}>{user.email}</p>
          <p className="text-gray-400 text-center" style={{ fontFamily: 'Poppins' }}>{user.mobileNumber}</p>
          
          {/* Change Password Button */}
          <button
            onClick={handleChangePassword}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
