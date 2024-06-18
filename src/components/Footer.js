import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-black py-10 lg:px-28 sm:px-10 flex flex-col md:flex-row justify-between text-white" style={{ fontFamily: 'Poppins' }}>
        <div className="w-full md:w-1/2 lg:w-2/5 px-8 mb-10 lg:mb-0">
          <h1 className="pb-3 font-bold text-3xl text-green-400 cursor-pointer">CarHub</h1>
          <h1 className="pb-3 font-bold text-xl">About CarHub</h1>
          <p className="text-gray-400">
            Welcome to CarHub, your premier destination for buying and selling
            cars online. Discover a wide range of vehicles and services tailored
            to your needs.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 px-8">
          <h1 className="pb-6 font-bold text-xl">Services</h1>
          <ul>
            <li className="text-gray-400 pb-3">New Cars</li>
            <li className="text-gray-400 pb-3">Used Cars</li>
            <li className="text-gray-400 pb-3">Car Financing</li>
            <li className="text-gray-400 pb-3">Trade-in</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 px-8">
          <h1 className="pb-6 font-bold text-xl">Support</h1>
          <ul>
            <li className="text-gray-400 pb-3">About Us</li>
            <li className="text-gray-400 pb-3">Contact Us</li>
            <li className="text-gray-400 pb-3">Privacy Policy</li>
            <li className="text-gray-400 pb-3">Terms & Conditions</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 px-8">
          <h1 className="pb-6 font-bold text-xl">Contact</h1>
          <ul>
            <li className="text-gray-400 pb-3"><i className="ri-mail-fill text-green-400"></i> &nbsp;info@carhub.com</li>
            <li className="text-gray-400 pb-3"><i className="ri-phone-fill text-green-400"></i> &nbsp;+1 234 567 8901</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
