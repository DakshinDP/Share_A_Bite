import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Share A Bite</h1>
      <p>Help reduce food waste by donating or receiving food.</p>
      <div className="button-container">
        <Link to="/donate">
          <button className="App-button">DONATE</button>
        </Link>
        <Link to="/receive">
          <button className="App-button">RECEIVE</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;