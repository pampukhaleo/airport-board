import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFlights } from '../flightsSlice';

const FlightsList = ({ flightsList }) => {
  const flightList = useSelector(flightsList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFlights());
  }, [dispatch]);

  return (
    <>
      {flightList.map(flight => (
        <div key={flight.id}>{flight.type}</div>
      ))}
    </>
  );
};

export default FlightsList;
