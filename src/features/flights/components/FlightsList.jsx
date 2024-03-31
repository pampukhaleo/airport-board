import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFlights } from '../flightsSlice';

const FlightsList = ({ flightsList }) => {
  const selectedFlights = useSelector(flightsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFlights());
  }, [dispatch]);

  return (
    <div style={{ margin: '50px 10px' }}>
      {selectedFlights.map(flight => (
        <div key={flight.id} style={{ margin: '10px' }}>
          {flight.type}
        </div>
      ))}
    </div>
  );
};

export default FlightsList;
