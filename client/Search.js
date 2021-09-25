import React from 'react';


const Search = ({searchTerm, handleSearchChange, searchSubmit}) => {
return (
  <form className='searchform' onSubmit={(event) => {searchSubmit(event, searchTerm)}}>
  <input type='text' className='searchinput'value={searchTerm} onChange={handleSearchChange}></input>
  <button type='submit' className="search-button fas fa-search"></button>
  </form>
)
}



export default Search;