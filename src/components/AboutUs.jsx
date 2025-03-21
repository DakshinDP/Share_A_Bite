import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="home"> {/* Use the same class as Home */}
      <h2>About Us</h2>
      <p>This is the About Us page. More content will be added later.</p>
      <button className="App-button" onClick={() => navigate('/')}>
        Go Back
      </button>
    </div>
  );
}

export default AboutUs;