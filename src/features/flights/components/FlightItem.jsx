import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const FlightItem = ({ flight }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/flight-details/${flight.codeShare}`, {
      state: { flight },
    });
  };

  const arrival = flight.arrivalDate;

  const responseDate = moment(arrival).format('DD/MM/YYYY');

  console.log(responseDate);

  return (
    <div key={flight.id} style={{ margin: '10px' }}>
      type: {flight.type}
      flight: {flight.codeShare}
      arrival date: {arrival}
      {/* departure date: {flight.departureDate} */}
      <button onClick={handleButtonClick}>Flight Info</button>
    </div>
  );
};

export default FlightItem;
