import React, { useMemo, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import {
  arrivalFlightsListSelector,
  departureFlightsListSelector,
  searchFlightsListSelector,
} from '../../flights/flights.selectors';
import FlightsList from '../../flights/components/FlightsList';
import SearchInput from './SearchInput';

const SearchContainer = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = searchInput => {
    setSearchText(searchInput);
  };

  const flightsList = useMemo(() => searchFlightsListSelector(searchText), [searchText]);

  return (
    <div>
      <h1>Search Flight</h1>
      <SearchInput handleSearch={handleSearch} />
      <div>
        <NavLink to={'departures'}>Departures</NavLink>
        <NavLink to={'arrivals'}>Arrivals</NavLink>
      </div>
      <Routes>
        <Route
          path="departures"
          element={<FlightsList flightsList={departureFlightsListSelector} />}
        />
        <Route
          path="/arrivals"
          element={<FlightsList flightsList={arrivalFlightsListSelector} />}
        />
        <Route path="/search" element={<FlightsList flightsList={flightsList} />} />
      </Routes>
    </div>
  );
};

export default SearchContainer;
