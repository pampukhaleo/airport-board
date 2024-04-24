import React, { useEffect, useMemo } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { flightSelector, searchByInputTextSelector } from '../../flights/flights.selectors';
import SearchInput from './SearchInput';
import FlightsList from '../../flights/components/FlightsList';
import { loadFlights } from '../../flights/flightsSlice';

const SearchContainer = () => {
  const flights = useSelector(flightSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFlights());
  }, [dispatch]);

  return (
    <div>
      <h1>Search Flight</h1>
      {/* <SearchInput handleSearch={handleSearchInput} /> */}
      <div>
        <NavLink to={'departures'}>Departures</NavLink>
        <NavLink to={'arrivals'}>Arrivals</NavLink>
      </div>
      <FlightsList flights={flights} />
    </div>
  );
};
// const [searchParam, setSearchParam] = useSearchParams({ text: '' });
// const currentSearchText = searchParam.get('text');
//
// const handleSearchInput = searchTextInput => {
//   setSearchParam({ text: searchTextInput });
// };

// const searchFlightsList = useMemo(
//   () => searchByInputTextSelector(currentSearchText),
//   [currentSearchText],
// );

export default SearchContainer;
