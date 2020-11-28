import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

function Playlist(props) {
  function handleNameChange({ target }) {
    props.updatePlaylistName(target.value);
  }

  return (
    <div className="Playlist">
      <input
        placeholder="Enter Playlist Name"
        value={props.playlistName}
        onChange={handleNameChange}
      />
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
