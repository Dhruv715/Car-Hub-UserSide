import React from 'react';

function Section3() {
  return (
    <>
      <div className='mainsection py-10 bg-white text-center'>
        <h1 className='px-5 py-4 font-extrabold text-4xl lg:text-5xl  md:text-4xl sm:text-3xl text-center' style={{ fontFamily: 'Poppins' }}>Explore Our Best Categories</h1>
        <div className='parentbox flex flex-wrap justify-center'>
          <div className="boxs m-4 bg-gray-100 p-6 rounded-lg shadow-lg">
            <img className='w-full h-48 object-cover rounded-lg mb-4' src="https://imgd-ct.aeplcdn.com/664x415/n/odg8asa_1459238.jpg?q=80" alt="Hatchback" />
            <h1 className='text-2xl font-bold py-2' style={{ fontFamily: 'Poppins' }}>HatchBack</h1>
            <h3 className='text-lg' style={{ fontFamily: 'Poppins' }}>₹10 Lakhs Starting Price</h3>
          </div>
          <div className="boxs m-4 bg-gray-100 p-6 rounded-lg shadow-lg">
            <img className='w-full h-48 object-cover rounded-lg mb-4' src="https://www.formulacarrental.com/images/hondacity.jpg" alt="Sedan" />
            <h1 className='text-2xl font-bold py-2' style={{ fontFamily: 'Poppins' }}>Sedan</h1>
            <h3 className='text-lg' style={{ fontFamily: 'Poppins' }}>₹15 Lakhs Starting Price</h3>
          </div>
          <div className="boxs m-4 bg-gray-100 p-6 rounded-lg shadow-lg">
            <img className='w-full h-48 object-cover rounded-lg mb-4' src="https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80" alt="SUV" />
            <h1 className='text-2xl font-bold py-2' style={{ fontFamily: 'Poppins' }}>SUV</h1>
            <h3 className='text-lg' style={{ fontFamily: 'Poppins' }}>₹25 Lakhs Starting Price</h3>
          </div>
          <div className="boxs m-4 bg-gray-100 p-6 rounded-lg shadow-lg">
            <img className='w-full h-48 object-cover rounded-lg mb-4' src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Continental%20GTModelImage.jpg&w=872&h=578&q=75&c=1" alt="Luxury Car" />
            <h1 className='text-2xl font-bold py-2' style={{ fontFamily: 'Poppins' }}>Luxury Cars</h1>
            <h3 className='text-lg' style={{ fontFamily: 'Poppins' }}>₹50 Lakhs Starting Price</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
