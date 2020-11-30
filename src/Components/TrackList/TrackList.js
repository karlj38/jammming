import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(props) {
  // console.log(props);
  return (
    <div className="TrackList">
      {props.results.map((result) => (
        <Track
          track={result}
          key={result.id}
          id={result.id}
          addTrack={props.addTrack}
          isRemoval={props.isRemoval}
          removeTrack={props.removeTrack}
          playlistTracks={props.playlistTracks}
        />
      ))}
    </div>
  );
}

export default TrackList;
