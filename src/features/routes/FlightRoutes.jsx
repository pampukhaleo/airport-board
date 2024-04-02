import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FlightsList from '../flights/components/FlightsList';
import FlightDetail from '../flights/components/FlightDetail';
import {
  arrivalFlightsListSelector,
  departureFlightsListSelector,
} from '../flights/flights.selectors';

const FlightRoutes = ({ searchList }) => (
  <Routes>
    <Route
      path="/departures"
      element={<FlightsList flightsList={departureFlightsListSelector} />}
    />
    <Route path="/arrivals" element={<FlightsList flightsList={arrivalFlightsListSelector} />} />
    <Route path="/search" element={<FlightsList flightsList={searchList} />} />
    <Route path="/flight-details/:flightNumber" element={<FlightDetail />} />
  </Routes>
);

export default FlightRoutes;
