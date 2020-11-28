import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(props) {
  console.log(props);
  return (
    <div className="TrackList">
      {props.results.map((result) => (
        <Track
          key={result.id}
          name={result.name}
          artist={result.artist}
          album={result.album}
        />
      ))}
    </div>
  );
}

export default TrackList;
