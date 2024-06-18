import React from 'react';

function Contact() {
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
        <div className="tripform text-center mx-auto w-full sm:mx-auto sm:w-2/3 md:w-3/3 lg:w-2/3 ms-1 my-5">
          <div className="flex w-full my-2">
            <input type="text" className="w-full sm:w-1/2 m-2 bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" placeholder="Your Name" />
            <input type="email" className="w-full sm:w-1/2 m-2 bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" placeholder="Email Address" />
          </div>
          <div className="flex w-full my-2">
            <input type="tel" className="w-full m-2 bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" placeholder="Phone Number" />
          </div>
          <div className="flex w-full my-2">
            <input type="text" placeholder="Car Model" className="w-full m-2 bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" />
          </div>
          <div className="flex w-full my-2">
            <input type="text" placeholder="Location" className="w-full m-2 bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600" />
          </div>
          <div className="flex w-full my-2">
            <textarea placeholder="Message" className="w-full m-2 bg-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-gray-600 h-40 resize-none"></textarea>
          </div>
          <div className="flex w-full my-2">
            <button className="w-full m-2 bg-green-600 hover:bg-green-600 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-green-600 transition duration-300 ease-in-out">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
