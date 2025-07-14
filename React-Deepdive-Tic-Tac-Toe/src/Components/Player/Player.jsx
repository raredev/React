import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [initialName, setName] = useState(name);
  const [isEditing, setEditing] = useState(false);

  function handleChange(ev) {
    setName(ev.target.value);
  }

  let nameElement = <span className="player-name">{initialName}</span>;
  //   let buttonText = "Edit";
  if (isEditing) {
    nameElement = (
      <input type="text" required value={initialName} onChange={handleChange} /> // Two way binding
    );
    // buttonText = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {nameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setEditing((editing) => !editing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
