/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import LiveTracking from './Components/LiveTracking/LiveTracking'; // Import the LiveTracking component
import LoginPage from './Components/LoginPage/LoginPage'; // Import the LoginPage component
import './App.css';

function LayoutWithFooter({ children }) {
  const location = useLocation(); // Get the current location (route)

  return (
    <>
      {children}
      {/* Conditionally render footer only on the home page */}
      {location.pathname === '/' && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWithFooter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/login" element={<LoginPage />} /> {/* Login Page */}
          <Route path="/live-tracking" element={<LiveTracking />} /> {/* Live Tracking Page */}
          {/* You can add more routes as needed */}
        </Routes>
      </LayoutWithFooter>
    </Router>
  );
}

export default App;
