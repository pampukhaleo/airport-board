import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFlights } from '../flightsSlice';
import FlightItem from './FlightItem';

const FlightsList = ({ flightsList }) => {
  const flights = useSelector(flightsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFlights());
  }, [dispatch]);

  return (
    <div style={{ margin: '50px 10px' }}>
      {flights.map(flight => (
        <FlightItem key={flight.id} flight={flight} />
      ))}
    </div>
  );
};

export default FlightsList;
