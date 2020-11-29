import React from "react";
import "./SearchOptions.css";

function SearchOptions(props) {
  const searchOptions = ["album", "artist", "track"];

  function handleClick({ target }) {
    props.setSearchOption(target.innerHTML);
    props.search(target.innerHTML);
  }

  return (
    <div style={{ display: props.isLoggedIn ? "" : "none" }}>
      {searchOptions.map((option, index) => {
        return (
          <button
            key={index}
            className={
              props.searchOption === option
                ? "SearchButton SearchOption active"
                : "SearchButton SearchOption"
            }
            onClick={handleClick}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default SearchOptions;
