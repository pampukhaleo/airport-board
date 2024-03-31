import React from 'react';
import FlightsList from './features/flights/components/FlightsList';
import { arrivalFlightsList, departureFlightsList } from './features/flights/flights.selectors';
import Header from './features/header/components/Header';

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#e7efec',
        }}
      >
        <div>
          <FlightsList flightsList={departureFlightsList} />
        </div>
        <div>
          <FlightsList flightsList={arrivalFlightsList} />
        </div>
      </div>
    </>
  );
}

export default App;
