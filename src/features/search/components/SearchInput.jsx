import React, { useState } from 'react';

const SearchInput = ({ handleSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault(); // Prevent the form from auto-refreshing the page
    handleSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;
