import React, { useState } from 'react';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';

function Contact() {
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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear previous error message if user starts typing again
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
      valid = false;
    }

    if (!formData.carModel.trim()) {
      newErrors.carModel = 'Car model is required';
      valid = false;
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSuccess(false);
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
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting inquiry:', error.message);
      alert('Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row md:flex-row overflow-hidden w-full">
      <div className="lg:w-1/2 md:w-1/2 sm:w-full text-center bg-gray-200 p-8">
        <h2 className="lg:text-lg sm:text-base md:text-base font-bold text-gray-700" style={{ fontFamily: 'Poppins' }}>
          Get in Touch with Us
        </h2>
        <h1 className="lg:text-5xl text-3xl md:text-4xl mt-5 font-extrabold" style={{ fontFamily: 'Poppins' }}>
          Contact CarHub
        </h1>
        <p className="text-center py-5 md:py-10 leading-8 font-medium text-gray-600" style={{ fontFamily: 'Poppins' }}>
          Have questions or need assistance? Reach out to CarHub's dedicated team. We're here to help you with buying or selling your car, providing information on listings, and ensuring you have a smooth experience.
        </p>
        <img 
          className="my-3 mx-auto w-4/5 md:w-3/5 sm:mx-auto sm:w-1/2" 
          style={{ borderRadius: '20px' }} 
          src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F3200384%2FUsed_Cars_2022_07_09_T04_31_45_408_Z_cd18a5954b.webp&w=3840&q=75" 
          alt="Car" 
        />
      </div>
      <div className="lg:w-1/2 md:w-1/2 sm:w-full bg-black py-5 md:py-10 px-2">
        <h2 className="text-lg font-bold text-gray-400 ps-5" style={{ fontFamily: 'Poppins' }}>
          Ready to Buy or Sell a Car?
        </h2>
        <h1 className="text-5xl lg:text-7xl sm:text-5xl mt-5 font-extrabold ps-5 pe-4" style={{ fontFamily: 'Poppins', color: 'white' }}>
          Get Started Today
        </h1>
        <form onSubmit={handleSubmit} className="tripform text-center mx-auto w-full sm:mx-auto sm:w-2/3 md:w-3/3 lg:w-2/3 ms-1 my-5">
          <div className="flex w-full my-2">
            <input type="text" className={`w-full sm:w-1/2 m-2 bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600 ${errors.name && 'border-red-500'}`} placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <input type="email" className={`w-full sm:w-1/2 m-2 bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600 ${errors.email && 'border-red-500'}`} placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} required />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="flex w-full my-2">
            <input type="tel" className={`w-full m-2 bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600 ${errors.phone && 'border-red-500'}`} placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div className="flex w-full my-2">
            <input type="text" placeholder="Car Model" className={`w-full m-2 bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600 ${errors.carModel && 'border-red-500'}`} name="carModel" value={formData.carModel} onChange={handleChange} required />
            {errors.carModel && <p className="text-red-500 text-sm">{errors.carModel}</p>}
          </div>
          <div className="flex w-full my-2">
            <input type="text" placeholder="Location" className={`w-full m-2 bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600 ${errors.location && 'border-red-500'}`} name="location" value={formData.location} onChange={handleChange} required />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>
          <div className="flex w-full my-2">
            <textarea placeholder="Message" className={`w-full m-2 bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600 h-40 resize-none ${errors.message && 'border-red-500'}`} name="message" value={formData.message} onChange={handleChange} required></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <div className="flex w-full my-2">
            <button type="submit" className="w-full m-2 bg-green-600 hover:bg-green-600 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-green-600 transition duration-300 ease-in-out">
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <Circles height="24" width="24" color="#FFFFFF" ariaLabel="circles-loading" visible={true} />
                  <span>Sending...</span>
                </div>
              ) : success ? (
                <div className="flex items-center justify-center space-x-2">
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
        </form>
      </div>
    </div>
  );
}

export default Contact;
