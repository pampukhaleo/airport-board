import React from 'react';
import { useNavigate } from 'react-router-dom';

const FlightItem = ({ flight }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/flight-details/${flight.codeShare}`, {
      state: { flight },
    });
  };

  return (
    <div key={flight.id} style={{ margin: '10px' }}>
      type: {flight.type}
      flight: {flight.codeShare}
      <button onClick={handleButtonClick}>Flight Info</button>
    </div>
  );
};

export default FlightItem;
