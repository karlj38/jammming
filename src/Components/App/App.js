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
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults results={searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
