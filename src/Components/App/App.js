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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, SetToken] = useState("");

  document.addEventListener("DOMContentLoaded", () => {
    let newToken = Spotify.getToken();
    if (newToken) {
      SetToken(newToken);
      setIsLoggedIn(true);
    }
  });

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

  function updatePlaylistName(newName) {
    setPlaylistName(newName);
  }

  async function savePlaylist() {
    const uris = playlistTracks.map((track) => track.uri);
    await Spotify.save(playlistName, uris, token);
    setPlaylistName("");
    setPlaylistTracks([]);
    setSearchResults([]);
    setSearchTerm("");
  }

  async function search() {
    const results = await Spotify.search(searchTerm, token);
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
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          Spotify={Spotify}
        />
        <div
          className="App-playlist"
          style={{ display: searchResults.length ? "" : "none" }}
        >
          <SearchResults
            results={searchResults}
            addTrack={addTrack}
            isLoggedIn={isLoggedIn}
          />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            removeTrack={removeTrack}
            updatePlaylistName={updatePlaylistName}
            savePlaylist={savePlaylist}
            isLoggedIn={isLoggedIn}
            searchResults={SearchResults}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
