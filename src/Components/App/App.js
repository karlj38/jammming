import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import "./App.css";
import Spotify from "../../util/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const uris = playlistTracks.map((track) => track.uri);
    console.log(uris);
    return uris;
  }

  async function search(term) {
    const results = await Spotify.search(term);
    console.log("results", results);
    setSearchResults(results);
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar
          search={search}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div className="App-playlist">
          <SearchResults results={searchResults} addTrack={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            removeTrack={removeTrack}
            updatePlaylistName={updatePlaylistName}
            savePlaylist={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
