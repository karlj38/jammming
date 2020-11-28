import React from "react";
import "./Track.css";

function Track(props) {
  function renderAction() {
    let isRemoval = false;
    return isRemoval ? "-" : "+";
  }
  // console.log(props);
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.name}</h3>
        <p>
          {props.artist} | {props.album}
        </p>
      </div>
      <button className="Track-action">{renderAction()}</button>
    </div>
  );
}

export default Track;
