import React, { useState } from 'react';
import {
  arrivalFlightsListSelector,
  departureFlightsListSelector,
  searchFlightsListSelector,
} from '../../flights/flights.selectors';
import FlightsList from '../../flights/components/FlightsList';
import SearchByTypeButton from '../../flights/components/SearchByTypeButton';
import SearchInput from '../../flights/components/SearchInput';

const SEARCH_TYPES = {
  DEPARTURES: 'DEPARTURES',
  ARRIVALS: 'ARRIVALS',
  SEARCHED: 'SEARCHED',
};

const SearchContainer = () => {
  const [searchType, setSearchType] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleDepartures = () => {
    setSearchType(SEARCH_TYPES.DEPARTURES);
  };

  const handleArrivals = () => {
    setSearchType(SEARCH_TYPES.ARRIVALS);
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
        <SearchByTypeButton callBack={handleDepartures}>Departures</SearchByTypeButton>
        <SearchByTypeButton callBack={handleArrivals}>Arrivals</SearchByTypeButton>
        {searchType === SEARCH_TYPES.DEPARTURES && (
          <FlightsList flightsList={departureFlightsListSelector} />
        )}
        {searchType === SEARCH_TYPES.ARRIVALS && (
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
