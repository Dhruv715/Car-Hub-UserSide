import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { TailSpin } from "react-loader-spinner";
import { Circles } from "react-loader-spinner"; // Assuming you have this import already

function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: "",
    location: "",
    message: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(
          `https://carhub-car-selling-website-backend-1.onrender.com/user/Cars/${id}`,
          {
            headers: {
              auth: token,
            },
          }
        );
        setCar(response.data.data);
        setSelectedImage(response.data.data.images[0]); // Set the first image as the default selected image
        // Introduce a delay of 500ms before setting loading to false
        setFormData({
          ...formData,
          carModel: `${response.data.data.name} ${response.data.data.model}`,
        });
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching car:", error);
        setLoading(false);
      }
    };

    fetchCar();
  }, [id, token]);

  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormLoading(true);
    setFormError("");

    try {
      const response = await axios.post(
        "https://carhub-car-selling-website-backend-1.onrender.com/user/TestDrive",
        formData
      );
      console.log(response.data);
      setFormData({
        name: "",
        email: "",
        phone: "",
        carModel: "",
        location: "",
        message: "",
      });
      setFormSuccess(true);
      setTimeout(() => setFormSuccess(false), 3000); // Reset success message after 3 seconds
    } catch (error) {
      console.error("Error submitting inquiry:", error.message);
      console.log("Error response:", error.response); // Add this line to log server response
      setFormError("Failed to submit inquiry. Please try again.");
    } finally {
      setFormLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 text-black">
        <TailSpin
          height={80}
          width={80}
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius={1}
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="py-10 mt-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <button
          onClick={() => navigate("/cataloge")}
          className="mb-4 bg-gray-900 text-white py-2 px-4 rounded"
        >
          <i className="ri-arrow-left-line"></i> Back to Cars
        </button>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 flex flex-col lg:flex-row items-start">
            <div className="flex flex-row lg:flex-col flex-wrap justify-start mb-4 lg:mb-0">
              {car.images.map((img, index) => (
                <img
                  key={index}
                  src={`https://carhub-car-selling-website-backend-1.onrender.com/images/${img}`}
                  alt={car.name}
                  className={`w-20 h-20 object-contain cursor-pointer m-2 ${
                    selectedImage === img ? "border-2 border-green-500" : ""
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            <div className="w-full lg:w-1/2 flex justify-center mb-4">
              <img
                src={`https://carhub-car-selling-website-backend-1.onrender.com/images/${selectedImage}`}
                alt={car.name}
                className="w-full lg:max-w-[40vw] h-auto object-contain"
              />
            </div>
            <div className="text-left lg:w-[50vw]">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "Poppins" }}
              >
                {car.name} {car.model}
              </h2>
              <div className="flex items-center mb-4">
                <span
                  className="text-gray-600 mr-2 py-1 flex items-start"
                  style={{ fontFamily: "Poppins" }}
                >
                  <h6 className="text-lg">$</h6>
                  <h1 className="text-2xl">{car.price.toLocaleString()}</h1>
                </span>
              </div>
              <div className="flex items-center mb-4">
                <p className="text-lg font-bold">Color:</p>
                <p className="text-lg ml-2">{car.color}</p>
              </div>
              <div className="flex items-center mb-4">
                <p className="text-lg font-bold">Owner Type:</p>
                <p className="text-lg ml-2">{car.ownerType}</p>
              </div>
              <div className="flex items-center mb-4">
                <p className="text-lg font-bold">Model:</p>
                <p className="text-lg ml-2">{car.model}</p>
              </div>
              <div className="flex items-center mb-4">
                <p className="text-lg font-bold">KM Reading:</p>
                <p className="text-lg ml-2">{car.kmReading}</p>
              </div>
              <p
                className="text-lg my-4 font-bold"
                style={{ fontFamily: "Poppins" }}
              >
                Description
              </p>
              <p className="mt-4" style={{ fontFamily: "Poppins" }}>
                {car.description}
              </p>
              <p
                className="text-lg my-4 font-bold"
                style={{ fontFamily: "Poppins" }}
              >
                Features
              </p>
              <ul
                className="mt-4 list-disc pl-5"
                style={{ fontFamily: "Poppins" }}
              >
                {car.features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Test Drive Form */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-8">
          <h2
            className="text-3xl font-bold text-center py-4"
            style={{ fontFamily: "Poppins" }}
          >
            Schedule a Test Drive
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mx-auto w-full sm:w-2/3 md:w-3/4 lg:w-1/2 px-4 py-6"
          >
            <div className="mb-4">
              <input
                type="text"
                className={`w-full m-2 bg-gray-700 text-white rounded-full py-4 px-4 focus:outline-none focus:bg-gray-600`}
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className={`w-full m-2 bg-gray-700 text-white rounded-full py-4 px-4 focus:outline-none focus:bg-gray-600`}
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                className={`w-full m-2 bg-gray-700 text-white rounded-full py-4 px-4 focus:outline-none focus:bg-gray-600`}
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className={`w-full m-2 bg-gray-700 text-white rounded-full py-4 px-4 focus:outline-none focus:bg-gray-600`}
                placeholder="Car Model"
                name="carModel"
                value={`${car.name} ${car.model}`}
                onChange={handleChange}
                required
                readOnly
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className={`w-full m-2 bg-gray-700 text-white rounded-full py-4 px-4 focus:outline-none focus:bg-gray-600`}
                placeholder="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className={`w-full m-2 bg-gray-700 text-white rounded-full py-4 px-4 focus:outline-none focus:bg-gray-600`}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-4 px-4 rounded-full flex items-center justify-center"
            >
              {formLoading ? (
                <div className="flex items-center space-x-2">
                  <Circles
                    height={24}
                    width={24}
                    color="#FFFFFF"
                    ariaLabel="circles-loading"
                    visible={true}
                  />
                  <span className="ml-2">Sending...</span>
                </div>
              ) : formSuccess ? (
                <div className="flex items-center space-x-2">
                  <svg
                    className="animate-bounce h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">Sent Successfully</span>
                </div>
              ) : (
                "Submit"
              )}
            </button>

            {formError && (
              <p className="text-red-500 text-sm mt-2">{formError}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
