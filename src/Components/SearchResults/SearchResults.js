import React from "react";
import TrackList from "../TrackList/TrackList";
import "./SearchResults.css";

function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h2>
        Search Results by{" "}
        <span style={{ textTransform: "capitalize" }}>
          {props.searchOption}
        </span>
      </h2>
      <TrackList
        results={props.results}
        addTrack={props.addTrack}
        isRemoval={false}
        playlistTracks={props.playlistTracks}
      />
    </div>
  );
}

export default SearchResults;
