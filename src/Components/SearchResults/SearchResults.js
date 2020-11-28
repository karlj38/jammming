import React from "react";
import TrackList from "../TrackList/TrackList";

function SearchResults(props) {
  // console.log("search", props.results);
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList results={props.results} />
    </div>
  );
}

export default SearchResults;
