import React from 'react';

function About() {
  return (
    <div className='w-screen bg-gray-100 py-10' style={{ width: '100%' }}>
      <h1 className='px-5 py-4 font-extrabold text-4xl lg:text-5xl md:text-4xl sm:text-3xl text-center' style={{ fontFamily: 'Poppins' }}>About <span className='text-green-500'>CarHub</span> </h1>
      <h3 className='font-medium text-center py-3 text-lg px-4' style={{ fontFamily: 'Poppins' }}>Discover why CarHub is your ultimate destination for buying and selling cars:</h3>
     
      <div className="parentbox flex flex-col lg:flex-row md:flex-col sm:flex-col my-5 justify-center items-center">
       <div className="lg:w-1/2 md:w-2/2 sm:w-full flex justify-center lg:justify-end mb-5 lg:mb-0 px-2">
          <img src="https://www.investopedia.com/thmb/17VMxpRyNHa64BAKOI219PKaFLk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/car-dealer-showing-new-car-6938e02d5076488e91d38edb72054770.jpeg" className='h-64 sm:h-96 md:h-96 lg:h-96 rounded-lg' alt="car dealership" />
        </div>
        <div className="lg:w-1/2 md:w-full sm:w-full px-2 lg:px-10">
          <ol className='text-justify font-sans font-medium text-base' style={{ fontFamily: 'Poppins' }}>
            <li className='py-3 text-gray-600'>Wide Range of Vehicles: CarHub offers an extensive inventory of vehicles, catering to every preference and budget, from reliable economy cars to luxurious models.</li>
            <li className='py-3 text-gray-600'>Trusted Marketplace: As a trusted platform, CarHub ensures that all listings are from verified sellers, providing peace of mind with every purchase.</li>
            <li className='py-3 text-gray-600'>Competitive Pricing: Enjoy transparent pricing and competitive rates on all vehicles, ensuring you get the best value whether buying or selling.</li>
            <li className='py-3 text-gray-600'>Expert Support: Our dedicated team of car experts is available to assist throughout your car-buying journey, offering personalized advice and guidance.</li>
            <li className='py-3 text-gray-600'>Secure Transactions: CarHub prioritizes your safety with secure transaction processes, making your car purchase or sale smooth and hassle-free.</li>
            <li className='py-3 text-gray-600'>24/7 Customer Service: Have questions or need assistance? Our customer support team is available round-the-clock to address any queries promptly.</li>
          </ol>
        </div>
       
      </div>
    </div>
  );
}

export default About;
