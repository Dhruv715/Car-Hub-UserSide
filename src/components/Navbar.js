import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
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
          setUserData(response.data.Data);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          setUserData(null);
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setIsLoggedIn(false);
        setUserData(null);
      });
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserData(null);
    navigate('/');
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold text-green-400 hover:text-green-300 hover:underline transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            CarHub
          </Link>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex justify-end items-center flex-grow space-x-6">
          <Link to="/" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            Home
          </Link>
          <Link to="/about" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            About Us
          </Link>
          <Link to="/cataloge" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            Catalog
          </Link>
          <Link to="/contact" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            Contact
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
                <img src={`https://carhub-car-selling-website-backend-1.onrender.com/images/${userData.profileImage}`} alt="User" className="w-8 h-8 rounded-full inline-block mr-2" />
                {userData.username}
              </Link>
              <button onClick={handleLogout} className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
                Login
              </Link>
              <Link to="/signup" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link to="/" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            Home
          </Link>
          <Link to="/about" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            About Us
          </Link>
          <Link to="/cataloge" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
          Catalogue
          </Link>
          {/* Catalogue */}
          <Link to="/contact" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            Contact
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
                <img src={`https://carhub-car-selling-website-backend-1.onrender.com/images/${userData.profileImage}`}  alt="User" className="w-8 h-8 rounded-full inline-block mr-2" />
                Profile
              </Link>
              <button onClick={handleLogout} className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
                Login
              </Link>
              <Link to="/signup" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
