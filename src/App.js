import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Routes, Route, useLocation } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Cars from './components/Cars';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Verify from './components/Verify';
import CarDetails from './components/CarDetails';
import { Analytics } from "@vercel/analytics/react"
function App() {
  const location = useLocation();

  // Check if current route is /login or /signup
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/verify';

  return (
    <>
      {!isAuthRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cataloge" element={<Cars />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {!isAuthRoute && <Footer />}
      <Analytics />
    </>
  );
}

export default App;
