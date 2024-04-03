import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadFlights } from '../flightsSlice';
import FlightItem from './FlightItem';
import SearchByDate from '../../search/components/SearchByDate';

const FlightsList = ({ flightsList }) => {
  const flights = useSelector(flightsList);
  const dispatch = useDispatch();
  const location = useLocation();
  const isDeparturesRouteOpen = location.pathname === '/departures';

  useEffect(() => {
    dispatch(loadFlights());
  }, [dispatch]);

  return (
    <div style={{ margin: '50px 10px' }}>
      {isDeparturesRouteOpen && <SearchByDate />}
      {flights.map(flight => (
        <FlightItem key={flight.id} flight={flight} />
      ))}
    </div>
  );
};

export default FlightsList;
