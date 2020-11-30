import React, { useState } from "react";
import { FiPlay, FiPause } from "react-icons/fi";
import "./Track.css";

function Track(props) {
  const [isPlaying, setIsPlaying] = useState(false);

  function renderAction() {
    return props.isRemoval ? "-" : "+";
  }

  function onAdd() {
    props.addTrack(props.track);
  }

  function onRemove() {
    props.removeTrack(props.track);
  }

  function preview() {
    if (!isPlaying) {
      document.getElementById(props.id).play();
      setIsPlaying(true);
    } else {
      document.getElementById(props.id).pause();
      setIsPlaying(false);
    }
  }

  function isItInPlaylist() {
    let result = props.playlistTracks.find(
      (track) => track.id === props.track.id
    );
    return result;
  }

  return (
    <div
      className="Track"
      style={{
        display: !props.isRemoval && isItInPlaylist() ? "none" : null,
      }}
    >
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {!props.isRemoval && props.track.preview && !isPlaying && (
        <FiPlay onClick={preview} />
      )}
      {!props.isRemoval && props.track.preview && isPlaying && (
        <FiPause onClick={preview} />
      )}
      <audio
        id={props.id}
        src={props.track.preview}
        className="preview"
      ></audio>
      <button
        className="Track-action"
        onClick={props.isRemoval ? onRemove : onAdd}
      >
        {renderAction()}
      </button>
    </div>
  );
}

export default Track;
