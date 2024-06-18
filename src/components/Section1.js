import React from 'react';

function Section1() {
  return (
    <div className='lg:py-16  bg-gray-100 md:py-12 sm:py-10 overflow-hidden' style={{width:'100%'}}>
      <div className='mx-auto w-full lg:w-4/5 md:w-4/5 sm:w-full'>
        <h1 className='px-5 py-4 font-extrabold text-4xl lg:text-5xl text-green-500 md:text-4xl sm:text-3xl text-center' style={{ fontFamily: 'Poppins' }}>
          Your Trusted Partner for Buying and Selling Cars
        </h1>
        <p className='px-5 py-4 md:py-6 leading-8 lg:text-lg md:text-md sm:text-sm text-gray-700 text-center' style={{ fontFamily: 'Poppins' }}>
          Welcome to CarHub, the leading platform for buying and selling cars. Whether you're looking for a new ride or trying to sell your current vehicle, CarHub offers a seamless and trustworthy experience.
        </p>
        <p className='px-5 py-4 md:py-8 leading-8 lg:text-lg md:text-md sm:text-sm text-gray-700 text-center' style={{ fontFamily: 'Poppins' }}>
          At CarHub, we understand the importance of finding the perfect car that suits your needs and budget. Our extensive listings and user-friendly platform make it easy to browse, compare, and choose the right vehicle. Join our community and enjoy the convenience and reliability that comes with CarHub.
        </p>
      </div>
    </div>
  );
}

export default Section1;
