import React from 'react';

const SearchByTypeButton = ({ children, callBack }) => (
  <button onClick={callBack}>{children}</button>
);

export default SearchByTypeButton;
