import Player from "./Components/Player/Player";
import GameBoard from "./Components/GameBoard/GameBoard";
import Log from "./Components/LogComponent/Log";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [turnsList, setTurnsList] = useState([]);

  function handleSwitchActivePlayer(rowIndex, colIndex) {
    let currentPlayer = activePlayer;
    setTurnsList((prevTurnsList) => {
      const newTurnsList = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurnsList,
      ];
      return newTurnsList;
    });
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
    // turnsList.push(`${activePlayer}: row-${rowIndex + 1} col-${colIndex + 1}`);
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
          turnsList={turnsList}
        />
      </div>
      <Log loggerList={turnsList} />
    </main>
  );
}

export default App;
