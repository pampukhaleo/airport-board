import React, { useEffect, useState } from 'react';
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

  const [searchDate, setSearchDate] = useState(null);

  const handleDateChange = date => {
    setSearchDate(date);
  };

  useEffect(() => {
    dispatch(loadFlights());
  }, [dispatch]);

  const filteredFlights = searchDate
    ? flights.filter(flight => flight.date === searchDate)
    : flights;

  console.log(filteredFlights);

  return (
    <div style={{ margin: '50px 10px' }}>
      {isDeparturesRouteOpen && <SearchByDate onDateChange={handleDateChange} />}
      {filteredFlights.map(flight => (
        <FlightItem key={flight.id} flight={flight} />
      ))}
    </div>
  );
};

export default FlightsList;
