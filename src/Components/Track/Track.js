import React from "react";
import "./Track.css";

function Track(props) {
  function renderAction() {
    return props.isRemoval ? "-" : "+";
  }
  // console.log(props);

  function onAdd({ target }) {
    props.addTrack(props.track);
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      <button className="Track-action" onClick={onAdd}>
        {renderAction()}
      </button>
    </div>
  );
}

export default Track;
