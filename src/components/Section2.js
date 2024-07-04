import React, { useState } from 'react';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';

function Section2() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    location: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://carhub-car-selling-website-backend-1.onrender.com/user/Inquiry', formData);
      console.log(response.data);
      setFormData({
        name: '',
        email: '',
        phone: '',
        carModel: '',
        location: '',
        message: ''
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000); // Reset success message after 3 seconds
    } catch (error) {
      console.error('Error submitting inquiry:', error.message);
      setError('Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col lg:flex-row  md:flex-row overflow-hidden' style={{ width: '100%' }}>
      <div className='lg:w-1/2 text-center md:w-1/2 sm:w-full sm:text-center'>
        <img
          className='my-3 mx-auto w-4/5 md:w-3/5 sm:mx-auto sm:w-1/2'
          style={{ borderRadius: '20px' }}
          src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F3200384%2FUsed_Cars_2022_07_09_T04_31_45_408_Z_cd18a5954b.webp&w=3840&q=75"
          alt="Car"
        />
        <h2 className='lg:text-lg sm:text-base md:text-base font-bold text-gray-400 ps-5' style={{ fontFamily: 'Poppins' }}>
          Your Premier Choice for Buying and Selling Cars
        </h2>
        <h1 className='lg:text-7xl text-5xl md:text-6xl mt-5 font-extrabold ps-5 pe-4' style={{ fontFamily: 'Poppins' }}>
          CarHub
        </h1>
        <p className='text-center ps-5 py-5 md:py-10 leading-8 font-medium pe-5 text-gray-400' style={{ fontFamily: 'Poppins' }}>
          Discover the ultimate car buying and selling experience with CarHub. Whether you're looking for a new vehicle or planning to sell your current one, CarHub provides a trusted platform with extensive listings and exceptional customer service. Our commitment to quality and customer satisfaction has earned us a reputation for excellence in the automotive market.
        </p>
      </div>
      <div className='lg:w-1/2 sm:text-center md:w-1/2 sm:w-full bg-black py-5 md:py-10 px-2'>
        <h2 className='text-lg font-bold text-gray-400 ps-5' style={{ fontFamily: 'Poppins' }}>
          Ready to Buy or Sell a Car?
        </h2>
        <h1 className='text-5xl lg:text-7xl sm:text-5xl mt-5 font-extrabold ps-5 pe-4' style={{ fontFamily: 'Poppins', color: 'white' }}>
          Get Started Today
        </h1>
        <form onSubmit={handleSubmit} className='tripform text-center mx-auto w-full sm:mx-auto sm:w-2/3 md:w-3/3 lg:w-2/3 ms-1 my-5'>
          <div className="flex w-full sm:w-2/2 md:2/2 my-2">
            <input type="text" className='w-full sm:w-1/2 m-2' placeholder='Your Name' name='name' value={formData.name} onChange={handleChange} required />
            <input type="email" className='w-full sm:w-1/2 m-2' placeholder='Email Address' name='email' value={formData.email} onChange={handleChange} required />
          </div>
          <div className='flex w-full sm:w-2/2 my-2'>
            <input type="tel" className='w-full m-2' placeholder='Phone Number' name='phone' value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="flex w-full sm:w-2/2 my-2">
            <input type="text" placeholder='Car Model' className='w-full m-2' name='carModel' value={formData.carModel} onChange={handleChange} required />
          </div>
          <div className="flex w-full sm:w-2/2 my-2">
            <input type="text" placeholder='Location' className='w-full m-2' name='location' value={formData.location} onChange={handleChange} required />
          </div>
          <div className="flex w-full sm:w-2/2 my-2">
            <input type="text" placeholder='Message' className='w-full m-2' name='message' value={formData.message} onChange={handleChange} required />
          </div>
          <div className='flex w-full sm:w-2/2 my-2'>
            <button type="submit" className='w-full m-2 bg-green-500 text-white'>
              {loading ? (
                <div className="flex items-center space-x-2">
                  <Circles height="24" width="24" color="#FFFFFF" ariaLabel="circles-loading" visible={true} />
                  <span>Sending...</span>
                </div>
              ) : success ? (
                <div className="flex items-center space-x-2">
                  <svg className="animate-bounce h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sent Successfully</span>
                </div>
              ) : (
                'Submit'
              )}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Section2;
