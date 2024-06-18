import React from 'react';

// Sample car data for demonstration
const cars = [
  {
    id: 1,
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/110233/camry-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 25000,
    discountedPrice: 22000,
  },
  {
    id: 2,
    image: 'https://imgd.aeplcdn.com/1056x594/n/9j8absa_1459841.jpg?q=80',
    make: 'Honda',
    model: 'Civic',
    year: 2023,
    price: 20000,
    discountedPrice: 18000,
  },
  {
    id: 3,
    image: 'https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=80',
    make: 'Ford',
    model: 'Mustang',
    year: 2023,
    price: 35000,
    discountedPrice: 32000,
  },
  {
    id: 4,
    image: 'https://images.dealer.com/ddc/vehicles/2023/Chevrolet/Corvette/Convertible/trim_Stingray_f23b2e/color/Rapid%20Blue-GMO-31,102,208-640-en_CA.jpg',
    make: 'Chevrolet',
    model: 'Corvette',
    year: 2023,
    price: 50000,
    discountedPrice: 48000,
  },
  {
    id: 5,
    image: 'https://images.dealer.com/ddc/vehicles/2025/BMW/X5/SUV/trim_xDrive40i_1fa932/color/Black%20Sapphire%20Metallic-475-13%2C13%2C13-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520',
    make: 'BMW',
    model: 'X5',
    year: 2023,
    price: 45000,
    discountedPrice: 42000,
  },
  {
    id: 6,
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/47336/e-class-exterior-right-front-three-quarter-27.jpeg?isig=0&q=80',
    make: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2023,
    price: 55000,
    discountedPrice: 52000,
  },
  {
    id: 7,
    image: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fcolors%2Faudi%2Fa4%2Faudi-a4-myth-black-metallic.png%3Fv%3D1641538520&w=750&q=75',
    make: 'Audi',
    model: 'A4',
    year: 2023,
    price: 40000,
    discountedPrice: 38000,
  },
  {
    id: 8,
    image: 'https://images.91wheels.com/assets/b_images/main/models/profile/profile1702715458.png?width=420&q=60?w=1080&q=60',
    make: 'Tesla',
    model: 'Model 3',
    year: 2024,
    price: 60000,
    discountedPrice: 58000,
  },
];

function Cars() {
  return (
    <div className="container mx-auto py-10 px-4 lg:px-0 lg:w-4/5">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={car.image} alt={car.make + ' ' + car.model} className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{car.make} {car.model}</h2>
              <p className="text-gray-600 font-medium">{car.year} Model</p>
              <div className="flex justify-between items-center mt-4">
                <div className='flex items-center'>
                  <p className="text-2xl text-green-500 font-bold flex items-start"><span className='text-3xl'>$</span>{car.discountedPrice.toLocaleString()}</p>
                  {/* <p className="text-sm text-red-400 line-through ps-2">${car.price.toLocaleString()}</p> */}
                </div>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium shadow-md hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300 ease-in-out">Show Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
