import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DonateForm from './components/DonateForm';
import Receive from './components/Receive';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for Home */}
          <Route path="/donate" element={<DonateForm />} /> {/* Route for DonateForm */}
          <Route path="/receive" element={<Receive />} /> {/* Route for Receive */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;