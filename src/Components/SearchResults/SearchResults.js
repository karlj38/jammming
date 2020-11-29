import React from "react";
import TrackList from "../TrackList/TrackList";

function SearchResults(props) {
  // console.log("search", props.results);
  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
      <TrackList
        results={props.results}
        addTrack={props.addTrack}
        isRemoval={false}
      />
    </div>
  );
}

export default SearchResults;
