import { useState } from "react";

export default function Player() {
  const [initialName, setName] = useState("");
  const [isClicked, setClicked] = useState(false);

  function onChangeHandler(ev) {
    setName(ev.target.value);
  }

  return (
    <section id="player">
      <h2>Welcome {isClicked ? initialName : "unknown entity"}</h2>
      <p>
        <input value={initialName} onChange={onChangeHandler} type="text" />
        <button onClick={() => setClicked(true)}>Set Name</button>
      </p>
    </section>
  );
}
