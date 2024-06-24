import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import { TailSpin } from 'react-loader-spinner';

function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(`https://carhub-car-selling-website-backend-1.onrender.com/user/Cars/${id}`, {
          headers: {
            auth: token
          }
        });
        setCar(response.data.data);
        setSelectedImage(response.data.data.images[0]); // Set the first image as the default selected image
        // Introduce a delay of 500ms before setting loading to false
        setTimeout(() => {
            setLoading(false);
          }, 1000);
      } catch (error) {
        console.error('Error fetching car:', error);
        setLoading(false);
      }
    };

    fetchCar();
  }, [id, token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 text-black">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        
      </div>
    );
  }

  return (
    <div className='py-10 mt-20 bg-gray-100'>
      <div className='container mx-auto px-6'>
        <button onClick={() => navigate('/cataloge')} className='mb-4 bg-gray-900 text-white py-2 px-4 rounded'>
          <i className="ri-arrow-left-line"></i> Back to Cars
        </button>
        <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
          <div className='p-4 flex flex-col lg:flex-row items-start'>
            <div className='flex flex-col flex-wrap justify-center mb-4 lg:mb-0'>
              {car.images.map((img, index) => (
                <img
                  key={index}
                  src={`https://carhub-car-selling-website-backend-1.onrender.com/images/${img}`}
                  alt={car.name}
                  className={`w-20 h-20 object-contain cursor-pointer m-2 ${selectedImage === img ? 'border-2 border-green-500' : ''}`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            <div className='w-full lg:w-1/2 flex justify-center mb-4'>
              <img src={`https://carhub-car-selling-website-backend-1.onrender.com/images/${selectedImage}`} alt={car.name} className='w-96 h-96 lg:w-[40vw] lg:h-[40vw] object-contain' />
            </div>
            <div className='text-left lg:w-[50vw]'>
              <h2 className='text-3xl font-bold mb-4' style={{ fontFamily: 'Poppins' }}>{car.name} {car.model}</h2>
              <div className='flex items-center mb-4'>
                <span className='text-gray-600 mr-2 py-1 flex items-start' style={{ fontFamily: 'Poppins' }}>
                  <h6 className='text-lg'>$</h6>
                  <h1 className='text-2xl'>{car.price.toLocaleString()}</h1>
                </span>
                {/* <span className='line-through text-red-500' style={{ fontFamily: 'Poppins' }}>{car.price + 500}</span> */}
              </div>
              <div className='flex items-center mb-4'>
                <p className='text-lg font-bold'>Color:</p>
                <p className='text-lg ml-2'>{car.color}</p>
              </div>
              <div className='flex items-center mb-4'>
                <p className='text-lg font-bold'>Owner Type:</p>
                <p className='text-lg ml-2'>{car.ownerType}</p>
              </div>
              <div className='flex items-center mb-4'>
                <p className='text-lg font-bold'>Model:</p>
                <p className='text-lg ml-2'>{car.model}</p>
              </div>
              <div className='flex items-center mb-4'>
                <p className='text-lg font-bold'>KM Reading:</p>
                <p className='text-lg ml-2'>{car.kmReading}</p>
              </div>
              <p className='text-lg my-4 font-bold' style={{ fontFamily: 'Poppins' }}>Description</p>
              <p className='mt-4' style={{ fontFamily: 'Poppins' }}>{car.description}</p>
              <p className='text-lg my-4 font-bold' style={{ fontFamily: 'Poppins' }}>Features</p>
              <ul className='mt-4 list-disc pl-5' style={{ fontFamily: 'Poppins' }}>
                {car.features.map((feature, index) => (
                  <li key={index} className='mb-2'>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
