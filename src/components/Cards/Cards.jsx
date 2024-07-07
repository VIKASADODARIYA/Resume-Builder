import React, { useState } from "react";
import './Cards.css'
import { useDarkMode } from "../../DarkModeContext";

function Cards({ item }) {
  const { isDarkMode } = useDarkMode();
  const [isFilled, setIsFilled] = useState(false);

  const handleViewClick = () => {
    try {
      window.open(item.path, "_blank");
    } catch (error) {
      console.error("Error opening PDF:", error);
    }
  };

  const handleClick = () => {
    setIsFilled(!isFilled); // Toggle the state
  };


  return (
    <div className={`card ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="custom-card">
        <figure>
          <img src={item.image} alt="Images" />
          <i className={`bi ${isFilled ? 'bi-star-fill' : 'bi-star'} star-icon`} onClick={handleClick}></i>
        </figure>
        <div className="card-body">
          <h2 className="card-name">
            {item.name}
          </h2>
          <p className="card-title">{item.title}</p>
          <div className="card-actions">
            <div className="price-badge">${item.price}</div>
          </div>
          <div className="book-action">
            <div className="read-now-button" onClick={handleViewClick}>
              Read Now
            </div>
            <div className="buy-now-button">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
