import React from 'react';
import FlightsList from './features/flights/components/flightsList';
import { departureFlightsList } from './features/flights/flights.selectors';

function App() {
  return <FlightsList flightsList={departureFlightsList} />;
}

export default App;
