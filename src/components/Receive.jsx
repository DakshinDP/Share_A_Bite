import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Receive() {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize the map
    const leafletMap = L.map('map', {
      center: [0, 0], // Default center
      zoom: 13, // Default zoom level
    });

    // Add a tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(leafletMap);

    setMap(leafletMap);

    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserLocation({ lat: latitude, lng: longitude });

          // Update map center to user's location
          leafletMap.setView([latitude, longitude], 13);

          // Add a marker for the user's location
          L.marker([latitude, longitude]).addTo(leafletMap)
            .bindPopup('You are here!')
            .openPopup();
        },
        (err) => {
          console.error('Error getting location:', err);
          alert('Cannot get current location. Please allow geolocation access.');
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 2000,
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }

    // Cleanup map on component unmount
    return () => {
      leafletMap.remove();
    };
  }, []);

  return (
    <div className="receive-page">
      <h2>Find Food Near You</h2>
      <div
        id="map"
      ></div>
      <button className="App-button" onClick={() => navigate('/')}>
        Go Back
      </button>
    </div>
  );
}

export default Receive;