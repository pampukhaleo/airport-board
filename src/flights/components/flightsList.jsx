import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createFlight } from '../flightsSlice';

const FlightsList = () => {
  const flightList = useSelector(state => state.flights);
  const dispatch = useDispatch();
  return (
    <>
      {flightList.map(flight => (
        <div key={flight.id}>
          {flight.name}
          {flight.id}
        </div>
      ))}
      <button onClick={() => dispatch(createFlight())}>Add new flight</button>
    </>
  );
};

export default FlightsList;
