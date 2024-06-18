import React from 'react';

function Section5() {
  return (
    <>
      <div className='flex flex-col md:flex-col lg:flex-row bg-green-400 w-screen py-28 px-10' style={{width :'100%'}}>
        <div className='lg:w-2/3 md:w-full sm:w-full lg:ps-20 sm:ps-0 md:ps-0 mt-4'>
          <p className='text-lg font-semibold text-left lg:text-left'>Get in Touch</p>
          <h1 className='text-5xl font-extrabold text-left lg:text-left' style={{ fontFamily: 'Poppins' }}>Contact our team to find your dream car.</h1>
        </div>
        <div className="lg:w-1/3 md:w-1/3 sm:w-2/3 lg:ms-20 sm:ms-0 md:ms-0 sm:mt-10 md:mt-10 lg:mt-0 lg:my-auto">
          <button className='bg-black text-white py-5 px-10 mt-4 rounded-full text-lg font-semibold w-full semibutton'>Find Your Car Now</button>
        </div>
      </div>
    </>
  );
}

export default Section5;
