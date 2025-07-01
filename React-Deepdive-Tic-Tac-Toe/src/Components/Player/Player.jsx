import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setEditing] = useState(false);
  let nameElement = <span className="player-name">{name}</span>;
  //   let buttonText = "Edit";
  if (isEditing) {
    nameElement = <input type="text" required />;
    // buttonText = "Save";
  }
  return (
    <li>
      <span className="player">
        {nameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
