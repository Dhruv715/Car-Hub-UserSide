import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <Link to="/cateloge" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            Catalog
          </Link>
          <Link to="/contact" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            Contact
          </Link>
          <Link to="/login" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            Login
          </Link>
          <Link to="/Signup" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
          Signup
          </Link>
          <Link to="/profile" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            Profile
          </Link>
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
          <Link to="/cateloge" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            Catalog
          </Link>
          <Link to="/contact" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            Contact
          </Link>
          <Link to="/login" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            Login
          </Link>
          <Link to="/Signup" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
          Signup
          </Link>
          <Link to="/profile" className="hover:text-green-300 transition duration-300 ease-in-out" style={{ fontFamily: 'Poppins' }}>
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
