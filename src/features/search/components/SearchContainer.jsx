import React, { useState } from 'react';
import {
  arrivalFlightsListSelector,
  departureFlightsListSelector,
  searchFlightsListSelector,
  SEARCH_TYPES,
} from '../../flights/flights.selectors';
import FlightsList from '../../flights/components/FlightsList';
import SearchByTypeButton from './SearchByTypeButton';
import SearchInput from './SearchInput';

const SearchContainer = () => {
  const [searchType, setSearchType] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleSearchType = type => {
    setSearchType(type);
  };

  const handleSearch = searchInput => {
    setSearchText(searchInput);
    setSearchType(SEARCH_TYPES.SEARCHED);
  };

  return (
    <div>
      <h1>пошук рейсу</h1>
      <SearchInput handleSearch={handleSearch} />
      <div>
        <SearchByTypeButton onClick={() => handleSearchType(SEARCH_TYPES.DEPARTURE)}>
          Departures
        </SearchByTypeButton>
        <SearchByTypeButton onClick={() => handleSearchType(SEARCH_TYPES.ARRIVAL)}>
          Arrivals
        </SearchByTypeButton>
        {searchType === SEARCH_TYPES.DEPARTURE && (
          <FlightsList flightsList={departureFlightsListSelector} />
        )}
        {searchType === SEARCH_TYPES.ARRIVAL && (
          <FlightsList flightsList={arrivalFlightsListSelector} />
        )}
        {searchType === SEARCH_TYPES.SEARCHED && (
          <FlightsList flightsList={searchFlightsListSelector(searchText)} />
        )}
      </div>
    </div>
  );
};
export default SearchContainer;
