import Player from "./Components/Player/Player";
import GameBoard from "./Components/GameBoard/GameBoard";
import Log from "./Components/LogComponent/Log";
import { useState } from "react";

const turnsList = [];

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSwitchActivePlayer(rowIndex, colIndex) {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
    turnsList.push(`${activePlayer}: row-${rowIndex + 1} col-${colIndex + 1}`);
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
      <Log loggerList={turnsList} />
    </main>
  );
}

export default App;
