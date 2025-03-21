import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function DonateForm() {
  const [foodName, setFoodName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [isVeg, setIsVeg] = useState(true);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log({ foodName, expiryDate, isVeg, image });
    navigate('/'); // Redirect to home page after submission
  };

  return (
    <div className="donate-form">
      <h2>Donate Food</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Food Name:</label>
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Food Type:</label>
          <label>
            <input
              type="radio"
              name="foodType"
              checked={isVeg}
              onChange={() => setIsVeg(true)}
            /> Veg
          </label>
          <label>
            <input
              type="radio"
              name="foodType"
              checked={!isVeg}
              onChange={() => setIsVeg(false)}
            /> Non-Veg
          </label>
        </div>
        <div>
          <label>Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="App-button">Submit</button>
      </form>
    </div>
  );
}

export default DonateForm;