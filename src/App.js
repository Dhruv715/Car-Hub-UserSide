import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import About from './components/About';
import Contact from './components/Contact';
import Cars from './components/Cars';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      {/* HomePage */}
        <Route path="/" element={ <Home/> } />
        {/* About Page */}
        <Route path="/about" element={ <About/> } />
        {/* Contact Us Page */}
        <Route path="/contact" element={ <Contact/> } />
        {/* Catelog Page */}
        <Route path="/cateloge" element={ <Cars/> } />
        {/* Login */}
        <Route path="/login" element={ <Login/> } />
        {/* Signup Form */}
        <Route path="/Signup" element={ <Signup/> } />
        {/* Profile */}
        <Route path="/Profile" element={ <Profile/> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
