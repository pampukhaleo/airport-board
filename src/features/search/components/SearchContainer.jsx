import React, { useMemo } from 'react';
import { NavLink, Route, Routes, useSearchParams } from 'react-router-dom';
import {
  arrivalFlightsListSelector,
  departureFlightsListSelector,
  searchFlightsListSelector,
} from '../../flights/flights.selectors';
import FlightsList from '../../flights/components/FlightsList';
import SearchInput from './SearchInput';
import FlightDetail from '../../flights/components/FlightDetail';

const SearchContainer = () => {
  const [searchParam, setSearchParam] = useSearchParams({ text: '' });
  const currentSearchText = searchParam.get('text');

  const handleSearchInput = searchTextInput => {
    setSearchParam({ text: searchTextInput });
  };

  const searchFlightsList = useMemo(
    () => searchFlightsListSelector(currentSearchText),
    [currentSearchText],
  );

  return (
    <div>
      <h1>Search Flight</h1>
      <SearchInput handleSearch={handleSearchInput} />
      <div>
        <NavLink to={'departures'}>Departures</NavLink>
        <NavLink to={'arrivals'}>Arrivals</NavLink>
      </div>
      <Routes>
        <Route
          path="/departures"
          element={<FlightsList flightsList={departureFlightsListSelector} />}
        />
        <Route
          path="/arrivals"
          element={<FlightsList flightsList={arrivalFlightsListSelector} />}
        />
        <Route path="/search" element={<FlightsList flightsList={searchFlightsList} />} />
        <Route path="/flight-details/:flightNumber" element={<FlightDetail />} />
      </Routes>
    </div>
  );
};

export default SearchContainer;
