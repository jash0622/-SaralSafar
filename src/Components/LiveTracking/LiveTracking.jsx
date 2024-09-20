/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './LiveTracking.css';

const LiveTracking = () => {
  const [fromStop, setFromStop] = useState('');
  const [toStop, setToStop] = useState('');
  const [showBuses, setShowBuses] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    const trimmedFromStop = fromStop.trim();
    const trimmedToStop = toStop.trim();

    if (trimmedFromStop && trimmedToStop) {
      setErrorMessage('');
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setShowBuses(true);
        setTimeout(() => {
          smoothScrollToBuses();
        }, 500);
      }, 3000);
    } else {
      setErrorMessage('Please enter both "From" and "To" stops.');
    }
  };

  const smoothScrollToBuses = () => {
    const busInfoSection = document.querySelector('.bus-info-container');
    if (busInfoSection) {
      busInfoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handling click event for each bus card
  const handleBusClick = (busNumber) => {
    alert(`Bus ${busNumber} clicked!`);
  };

  return (
    <div className="live-tracking">
      {loading && (
        <div className="loading-animation">
          <div className="route-container">
            <svg className="route-svg" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                id="bus-path"
                d="M 50 150 Q 200 50, 400 150 Q 600 250, 750 100"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="10 10"
                fill="transparent"
              />
              <circle cx="50" cy="150" r="8" fill="red" />
              <circle cx="400" cy="150" r="8" fill="red" />
              <circle cx="750" cy="100" r="8" fill="red" />
            </svg>
            <img src="https://img.icons8.com/color/48/bus.png" alt="Bus" className="bus" />
            <div className="count-box">👨‍🦰 25</div>
          </div>
        </div>
      )}

      {!loading && (
        <>
          <div className="banner">
            <h1>India's First Live Bus Tracking & Passenger Counting Service</h1>
            <div className="search-section">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="From"
                  value={fromStop}
                  onChange={(e) => setFromStop(e.target.value)}
                  aria-label="From Bus Stop"
                />
              </div>
              <div className="swap-icon">⇄</div>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="To"
                  value={toStop}
                  onChange={(e) => setToStop(e.target.value)}
                  aria-label="To Bus Stop"
                />
              </div>
              <button onClick={handleSearch}>Search Buses</button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <h2 className="tagline">Suffer nahi, Safar kariye!</h2>
          </div>

          {showBuses && (
            <div className="bus-info-container">
              <div className="bus-info-box" onClick={() => handleBusClick('RJ14PE4874')}>
                <img src="50.png" alt="Bus" className="bus-image" />
                <div className="bus-details">
                  <div className="bus-number">RJ14PE4874</div>
                  <div className="bus-route">
                    <span>From : Jaipur ⇄ To : Tonk</span>
                  </div>
                  <div className="bus-time">05 Min</div>
                  <div className="passenger-count">
                    <span className="icon">👥</span> 36
                  </div>
                </div>
              </div>
              <div className="bus-info-box" onClick={() => handleBusClick('RJ14PE4674')}>
                <img src="50.png" alt="Bus" className="bus-image" />
                <div className="bus-details">
                  <div className="bus-number">RJ14PE4674</div>
                  <div className="bus-route">
                    <span>From : Jaipur ⇄ To : Kota</span>
                  </div>
                  <div className="bus-time">10 Min</div>
                  <div className="passenger-count">
                    <span className="icon">👥</span> 42
                  </div>
                </div>
              </div>
              <div className="bus-info-box" onClick={() => handleBusClick('RJ14PE4694')}>
                <img src="50.png" alt="Bus" className="bus-image" />
                <div className="bus-details">
                  <div className="bus-number">RJ14PE4694</div>
                  <div className="bus-route">
                    <span>From : Jaipur ⇄ To : Kota</span>
                  </div>
                  <div className="bus-time">15 Min</div>
                  <div className="passenger-count">
                    <span className="icon">👥</span> 50
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LiveTracking;