import React from "react";
import Spotify from "../../util/Spotify";
import "./SearchBar.css";

function SearchBar(props) {
  function search(event) {
    event.preventDefault();
    props.search();
  }

  function handleChange({ target }) {
    props.setSearchTerm(target.value);
  }

  function login() {
    Spotify.login();
  }

  return (
    <form className="SearchBar" onSubmit={search}>
      <input
        placeholder="Enter A Song, Album, or Artist"
        value={props.searchTerm}
        onChange={handleChange}
        style={{ display: props.isLoggedIn ? "" : "none" }}
      />
      {props.isLoggedIn && (
        <button type="submit" className="SearchButton">
          SEARCH
        </button>
      )}
      {!props.isLoggedIn && (
        <button className="SearchButton" onClick={login}>
          LOGIN
        </button>
      )}
    </form>
  );
}

export default SearchBar;
