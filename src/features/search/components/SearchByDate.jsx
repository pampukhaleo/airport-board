import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchByDateSelector } from '../../flights/flights.selectors';

const SearchByDate = ({ onDateChange }) => {
  const [searchParam, setSearchParam] = useSearchParams({ date: '' });
  const currentSearchDate = searchParam.get('date');

  const searchFlightsList = useMemo(
    () => searchByDateSelector(currentSearchDate),
    [currentSearchDate],
  );

  const handleSearch = searchDateInput => {
    setSearchParam({ date: searchDateInput });
    searchFlightsList();
  };

  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
    .toISOString()
    .slice(0, 10);
  const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
    .toISOString()
    .slice(0, 10);

  const handleDateClick = date => {
    onDateChange(date);
  };

  return (
    <div>
      <input type="date" onChange={e => handleSearch(e.target.value)} />
      <ul>
        <li onClick={() => handleDateClick(yesterday)}>YESTERDAY</li>
        <li onClick={() => handleDateClick(today)}>TODAY</li>
        <li onClick={() => handleDateClick(tomorrow)}>TOMORROW</li>
      </ul>
    </div>
  );
};

export default SearchByDate;
