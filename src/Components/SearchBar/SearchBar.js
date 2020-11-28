import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  function search(event) {
    event.preventDefault();
    props.search(props.searchTerm);
  }

  function handleChange({ target }) {
    props.setSearchTerm(target.value);
  }

  return (
    <form className="SearchBar" onSubmit={search}>
      <input
        placeholder="Enter A Song, Album, or Artist"
        value={props.searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className="SearchButton">
        SEARCH
      </button>
    </form>
  );
}

export default SearchBar;
