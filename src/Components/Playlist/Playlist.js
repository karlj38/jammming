import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

function Playlist(props) {
  return (
    <div className="Playlist">
      <input defaultValue={props.playlistName} />
      <TrackList
        results={props.playlistTracks}
        removeTrack={props.removeTrack}
        isRemoval={true}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
