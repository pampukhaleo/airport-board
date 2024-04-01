import React, { useMemo } from 'react';
import { NavLink, Route, Routes, useSearchParams } from 'react-router-dom';
import {
  arrivalFlightsListSelector,
  departureFlightsListSelector,
  searchFlightsListSelector,
} from '../../flights/flights.selectors';
import FlightsList from '../../flights/components/FlightsList';
import SearchInput from './SearchInput';

const SearchContainer = () => {
  const [searchText, setSearchText] = useSearchParams({ text: '' });
  const inputText = searchText.get('text');

  const handleSearch = searchInput => {
    setSearchText({ text: searchInput });
    console.log(inputText);
  };

  const searchFlightsList = useMemo(() => searchFlightsListSelector(inputText), [inputText]);

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
        <Route path="/search" element={<FlightsList flightsList={searchFlightsList} />} />
      </Routes>
    </div>
  );
};

export default SearchContainer;
