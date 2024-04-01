import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const FlightDetail = () => {
  const { flightNumber } = useParams();
  const location = useLocation();
  const { airlineLogo, airlineName, departureCity, arrivalCity, terminal, type } =
    location.state.flight;

  return (
    <div style={{ margin: '50px 10px' }}>
      <h2>Flight {flightNumber} Details</h2>
      <img src={`${airlineLogo}`} alt="" style={{ width: '150px' }} />
      <h3>{airlineName}</h3>
      <p>
        <span>{departureCity}</span> - <span>{arrivalCity}</span>
      </p>
      <p>Terminal {terminal}</p>
      <p>{type}</p>
    </div>
  );
};

export default FlightDetail;
