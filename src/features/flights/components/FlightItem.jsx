import React from 'react';

const FlightItem = ({ flight }) => (
  <div key={flight.id} style={{ margin: '10px' }}>
    type: {flight.type}
    flight: {flight.codeShare}
  </div>
);

export default FlightItem;
