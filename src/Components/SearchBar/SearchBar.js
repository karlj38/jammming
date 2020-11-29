import React from "react";
import Spotify from "../../util/Spotify";
import "./SearchBar.css";
import SearchOptions from "./SearchOptions/SearchOptions";

function SearchBar(props) {
  function handleChange({ target }) {
    props.setSearchTerm(target.value);
  }

  function handleKey(event) {
    if (event.key === "Enter") {
      console.log("bar", props.searchOption);
      props.search(props.searchOption);
    }
  }

  function login() {
    Spotify.login();
  }

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        value={props.searchTerm}
        onChange={handleChange}
        style={{ display: props.isLoggedIn ? "" : "none" }}
        onKeyPress={handleKey}
      />
      <SearchOptions
        searchOption={props.searchOption}
        setSearchOption={props.setSearchOption}
        isLoggedIn={props.isLoggedIn}
        search={props.search}
      />
      {!props.isLoggedIn && (
        <button className="SearchButton" onClick={login}>
          LOGIN
        </button>
      )}
    </div>
  );
}

export default SearchBar;
