import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchInput = ({ handleSearch }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleSearch(input);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit" onClick={() => navigate('/search')}>
          Search
        </button>
      </form>
    </>
  );
};

export default SearchInput;
