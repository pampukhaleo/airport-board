import React, { useState } from 'react';

const SearchInput = ({ handleSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(input);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchInput;
