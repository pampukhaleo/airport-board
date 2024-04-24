import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { loadFlights } from '../flightsSlice';
import FlightItem from './FlightItem';
import SearchByDate from '../../search/components/SearchByDate';

const FlightsList = ({ flights }) => {
  const location = useLocation();
  const { direction } = useParams();
  console.log(direction);

  const flightsList = flights[direction === 'arrivals' ? 'arrivals' : 'departures'] || [];

  return (
    <div style={{ margin: '50px 10px' }}>
      {/* {isDeparturesRouteOpen && <SearchByDate />} */}
      {flightsList.map(flight => (
        <FlightItem key={flight.id} flight={flight} />
      ))}
    </div>
  );
};

export default FlightsList;
