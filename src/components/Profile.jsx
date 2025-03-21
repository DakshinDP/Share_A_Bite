import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="home"> {/* Use the same class as Home */}
      <h2>Profile</h2>
      <p>This is the profile page. More content will be added later.</p>
      <button className="App-button" onClick={() => navigate('/')}>
        Go Back
      </button>
    </div>
  );
}

export default Profile;