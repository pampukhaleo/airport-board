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
  const [searchType, setSearchType] = useState(SEARCH_TYPES.DEPARTURE);
  const [searchText, setSearchText] = useState('');

  const handleSearchType = type => {
    setSearchType(type);
  };

  const handleSearch = searchInput => {
    setSearchText(searchInput);
    setSearchType(SEARCH_TYPES.SEARCHED);
  };

  let flightsList;
  switch (searchType) {
    case SEARCH_TYPES.DEPARTURE:
      flightsList = departureFlightsListSelector;
      break;
    case SEARCH_TYPES.ARRIVAL:
      flightsList = arrivalFlightsListSelector;
      break;
    case SEARCH_TYPES.SEARCHED:
      flightsList = searchFlightsListSelector(searchText);
      break;
    default:
      flightsList = [];
  }

  return (
    <div>
      <h1>Search Flight</h1>
      <SearchInput handleSearch={handleSearch} />
      <div>
        <SearchByTypeButton onClick={() => handleSearchType(SEARCH_TYPES.DEPARTURE)}>
          Departures
        </SearchByTypeButton>
        <SearchByTypeButton onClick={() => handleSearchType(SEARCH_TYPES.ARRIVAL)}>
          Arrivals
        </SearchByTypeButton>
      </div>
      <FlightsList flightsList={flightsList} />
    </div>
  );
};

export default SearchContainer;
