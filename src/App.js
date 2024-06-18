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

function App() {
  const location = useLocation();

  // Check if current route is /login or /signup
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/Signup';

  return (
    <>
      {!isAuthRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalogue" element={<Cars />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {!isAuthRoute && <Footer />}
    </>
  );
}

export default App;
