import React from "react";
import night from "./assets/night.svg";
import "./Button.css";

function Button(props) {
  return (
    <label class="switch">
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.handleClicked}
      />
      <span class="slider round">
        <img className="Button-night" src={night} alt="Activate night mode" />
      </span>
    </label>
  );
}

export default Button;
