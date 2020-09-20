import React from "react";

export default function Content(props) {
    const {header ="", subhead="", button="" }  = props;
  return (
    <div className="content-section">
      <h2>{header}</h2>
      <div>Creating Connections</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi{" "}
      </p>
      <button>{button}</button>
    </div>
  );
}
