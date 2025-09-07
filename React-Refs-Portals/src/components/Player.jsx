import { useState, useRef } from "react";

export default function Player() {
  const [initialName, setName] = useState("");
  const input = useRef();

  function onClickHandler() {
    setName(input.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {initialName ? initialName : "unknown entity"}</h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={onClickHandler}>Set Name</button>
      </p>
    </section>
  );
}
