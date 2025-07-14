import Player from "./Components/Player/Player";
import GameBoard from "./Components/GameBoard/GameBoard";
import { act, useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSwitchActivePlayer() {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard
          onSelectSquare={handleSwitchActivePlayer}
          activeSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
