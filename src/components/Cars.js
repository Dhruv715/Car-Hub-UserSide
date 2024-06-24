import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

function Cars() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false); // State to manage fade-in effect
  const [search, setSearch] = useState('');
  const [price, setPrice] = useState([0, 20000000]); // Price range in cents, adjusted for 2 crores
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [carsPerPage] = useState(6); // Number of cars per page
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('https://carhub-car-selling-website-backend-1.onrender.com/user/AllCars', {
          headers: {
            auth: token
          }
        });
        if (response.data.status === 'Success') {
          setCars(response.data.data);
          setFilteredCars(response.data.data);
        }
        // Introducing a one-second delay to show the spinner
        setTimeout(() => {
          setLoading(false);
          setFadeIn(true);
        }, 1000); // Show spinner for at least 1 second
      } catch (error) {
        console.error('Error fetching car data:', error);
        setLoading(false);
      }
    };

    fetchCars();
  }, [token]);

  useEffect(() => {
    const results = cars.filter(car =>
      car.name.toLowerCase().includes(search.toLowerCase()) &&
      car.price >= price[0] &&
      car.price <= price[1]
    );
    setFilteredCars(results);
  }, [search, price, cars]);

  const handlePriceChange = (e) => {
    setPrice([0, Number(e.target.value)]);
  };

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto py-10 px-4 lg:px-0 lg:w-4/5">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Catalog</h1>

      <div className="mb-6 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <input
          type="text"
          placeholder="Search by car name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 lg:mb-0 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 lg:w-[60vw]"
        />
        <div className="lg:ml-10 lg:w-[30vw]">
          <div className="flex items-center">
            <span className="mr-2">$0</span>
            <input
              type="range"
              min="0"
              max="20000000" // Adjusted max value for 2 crores in cents
              step="10000"
              value={price[1]}
              onChange={handlePriceChange}
              className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg accent-green-500"
              style={{
                background: `linear-gradient(to right, #22c55e 0%, #22c55e ${(price[1] / 20000000) * 100}%, #d1d5db ${(price[1] / 20000000) * 100}%, #d1d5db 100%)`,
              }}
            />
            <span className="ml-2">$2Cr</span>
          </div>
          <div className="flex justify-between text-xs mt-2">
            <span>Min: ₹0</span>
            <span>Max: ₹{(price[1] / 100000).toLocaleString()}L</span>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <TailSpin
            height={80}
            width={80}
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
          />
        </div>
      ) : (
        <>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            {currentCars.map((car) => (
              <Link to={`/car/${car._id}`} key={car._id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={`https://carhub-car-selling-website-backend-1.onrender.com/images/${car.images[0]}`} alt={`${car.name} ${car.model}`} className="w-full h-48 object-contain object-center" />
                  <div className="p-4">
                    <h2 className="text-xl font-bold">{car.name} {car.model}</h2>
                    <p className="text-gray-600 font-medium">{car.year} Model</p>
                    <div className="flex justify-between items-center mt-4">
                      <div className='flex items-center'>
                        <p className="text-2xl text-green-500 font-bold flex items-start"><span className='text-3xl'>₹</span>{car.price.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center mt-6 gap-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Previous
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase transition-all ${
                    currentPage === index + 1
                      ? 'bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85]'
                      : 'text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20'
                  }`}
                  disabled={currentPage === index + 1}
                >
                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    {index + 1}
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cars;
