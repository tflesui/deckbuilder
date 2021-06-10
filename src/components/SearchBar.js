import React from 'react';

import { fetchCards } from '../api';

const SearchBar = ({ setResults }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cards = await fetchCards();
    setResults(cards);
  }

  return (
    <div id="search">
        <h3>Look up cards here...</h3>
        <form onSubmit={ handleSubmit }>
            <input type="text" placeholder="card search" />
            <button type="submit">Search</button>
        </form>
    </div>
  );
}

export default SearchBar;