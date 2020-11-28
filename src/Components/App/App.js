import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: "A",
      artist: "b",
      album: "c",
      id: 1,
    },
    {
      name: "A",
      artist: "b",
      album: "c",
      id: 2,
    },
    {
      name: "A",
      artist: "b",
      album: "c",
      id: 3,
    },
  ]);
  // console.log("app", searchResults);
  const [playlistName, setPlaylistName] = useState("Test");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  function addTrack(trackToAdd) {
    if (!playlistTracks.find((track) => track.id === trackToAdd.id)) {
      setPlaylistTracks([...playlistTracks, trackToAdd]);
    }
  }

  function removeTrack(trackToRemove) {
    setPlaylistTracks(
      playlistTracks.filter((track) => track.id !== trackToRemove.id)
    );
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults results={searchResults} addTrack={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            removeTrack={removeTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
