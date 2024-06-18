import React from 'react';

function Section4() {
  return (
    <>
      <div className='w-screen bg-gray-100 py-10' style={{width :'100%'}}>
        <h1 className='px-5 py-4 font-extrabold text-4xl lg:text-5xl  md:text-4xl sm:text-3xl text-center' style={{ fontFamily: 'Poppins' }}>Why Choose CarHub</h1>
        <h3 className='font-medium text-center py-3 text-lg px-4' style={{ fontFamily: 'Poppins' }}>Here are some reasons why CarHub is your best choice for buying and selling cars:</h3>
        <div className="parentbox flex flex-col lg:flex-row md:flex-col sm:flex-col my-5 justify-center items-center">
          <div className="lg:w-1/2 md:w-2/2 sm:w-full flex justify-center lg:justify-end mb-5 lg:mb-0 px-2">
            <img src="https://www.investopedia.com/thmb/17VMxpRyNHa64BAKOI219PKaFLk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/car-dealer-showing-new-car-6938e02d5076488e91d38edb72054770.jpeg" className='h-64 sm:h-96 md:h-96 lg:h-96 rounded-lg' alt="car dealership" />
          </div>
          <div className="lg:w-1/2 md:w-full sm:w-full px-2 lg:px-10">
            <ol className='text-justify font-sans font-medium text-base' style={{ fontFamily: 'Poppins' }}>
              <li className='py-3 text-gray-600'>Extensive Inventory: Our extensive inventory includes a wide range of well-maintained cars, ensuring you find the perfect vehicle for your needs and budget.</li>
              <li className='py-3 text-gray-600'>Trusted Sellers: We partner with trusted sellers and dealerships, ensuring that every car listed on our platform meets high standards of quality and reliability.</li>
              <li className='py-3 text-gray-600'>Competitive Pricing: Our transparent pricing policy and competitive rates ensure that you get the best deal, whether you're buying or selling a car.</li>
              <li className='py-3 text-gray-600'>Expert Assistance: Our team of experts is available to assist you throughout the buying or selling process, providing valuable insights and support.</li>
              <li className='py-3 text-gray-600'>Easy and Secure Transactions: Our user-friendly platform and secure transaction process make buying and selling cars easy, safe, and hassle-free.</li>
              <li className='py-3 text-gray-600'>24/7 Customer Support: Our dedicated customer support team is available around the clock to address any queries or concerns you may have.</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
