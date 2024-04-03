import React, { useMemo } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { searchByInputTextSelector } from '../../flights/flights.selectors';
import SearchInput from './SearchInput';
import FlightRoutes from '../../routes/FlightRoutes';

const SearchContainer = () => {
  const [searchParam, setSearchParam] = useSearchParams({ text: '' });
  const currentSearchText = searchParam.get('text');

  const handleSearchInput = searchTextInput => {
    setSearchParam({ text: searchTextInput });
  };

  const searchFlightsList = useMemo(
    () => searchByInputTextSelector(currentSearchText),
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
      <FlightRoutes searchList={searchFlightsList} />
    </div>
  );
};

export default SearchContainer;
