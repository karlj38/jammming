import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

function Playlist(props) {
  function handleNameChange({ target }) {
    props.updatePlaylistName(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.savePlaylist();
  }

  return (
    <form className="Playlist" onSubmit={handleSubmit}>
      <input
        placeholder="Enter Playlist Name"
        value={props.playlistName}
        onChange={handleNameChange}
        required={true}
      />
      <TrackList
        results={props.playlistTracks}
        removeTrack={props.removeTrack}
        isRemoval={true}
        playlistTracks={props.playlistTracks}
      />
      <button
        className="Playlist-save"
        style={{ display: props.playlistTracks.length ? "" : "none" }}
        type="submit"
        // onClick={handleClick}
      >
        SAVE TO SPOTIFY
      </button>
    </form>
  );
}

export default Playlist;
