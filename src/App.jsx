import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './features/header/components/Header';
import SearchContainer from './features/search/components/SearchContainer';
import FlightsList from './features/flights/components/FlightsList';
import {
  arrivalFlightsListSelector,
  departureFlightsListSelector,
} from './features/flights/flights.selectors';
import FlightDetail from './features/flights/components/FlightDetail';

function App() {
  return (
    <>
      <Header />
      <SearchContainer />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/:direction" element={<SearchContainer />} />
        <Route path="/flight-details/:flightNumber" element={<FlightDetail />} />
      </Routes>
    </>
  );
}

export default App;
