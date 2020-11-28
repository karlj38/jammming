import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      uri: "1",
      name: "An",
      artist: "ba",
      album: "ca",
      id: 1,
    },
    {
      uri: "2",
      name: "nA",
      artist: "ab",
      album: "ac",
      id: 2,
    },
    {
      uri: "3",
      name: "NA",
      artist: "Ab",
      album: "Ac",
      id: 3,
    },
  ]);
  // console.log("app", searchResults);
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

  function search(term) {
    console.log(term);
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
