import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import DonateForm from './components/DonateForm';
import Receive from './components/Receive';
import Profile from './components/Profile'; // Import Profile component
import AboutUs from './components/AboutUs'; // Import AboutUs component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Share A Bite</h1>
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/donate" className="nav-link">Donate</Link>
            <Link to="/receive" className="nav-link">Receive</Link>
            <div className="right-links" style={{paddingRight: '20px'}}>
              <Link to="/about-us" className="nav-link">About Us</Link> {/* About Us before Profile */}
              <Link to="/profile" className="nav-link">Profile</Link> {/* Profile at the end */}
              
            </div>
          </nav>
        </header>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route for Home */}
            <Route path="/donate" element={<DonateForm />} /> {/* Route for DonateForm */}
            <Route path="/receive" element={<Receive />} /> {/* Route for Receive */}
            <Route path="/profile" element={<Profile />} /> {/* Route for Profile */}
            <Route path="/about-us" element={<AboutUs />} /> {/* Route for AboutUs */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;