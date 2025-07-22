import Player from "./Components/Player/Player";
import GameBoard from "./Components/GameBoard/GameBoard";
import Log from "./Components/LogComponent/Log";
import { useState } from "react";

function getActivePlayer(turnsList) {
  let activePlayer = "X";
  if (turnsList.length > 0 && turnsList[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [turnsList, setTurnsList] = useState([]);

  const activePlayer = getActivePlayer(turnsList);

  function handleSwitchActivePlayer(rowIndex, colIndex) {
    // let currentPlayer = activePlayer;
    setTurnsList((prevTurnsList) => {
      // Below condition is one way of dealing with clicking button once
      // if (
      //   prevTurnsList.length > 0 &&
      //   prevTurnsList[0].square.row == rowIndex &&
      //   prevTurnsList[0].square.col == colIndex &&
      //   prevTurnsList[0].player != undefined
      // ) {
      //   return prevTurnsList;
      // }
      const currentPlayer = getActivePlayer(prevTurnsList); // Why we are doing this? Just to get correct symbol since react schedules this call so just to be on safer side
      const newTurnsList = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurnsList,
      ];
      return newTurnsList;
    });
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
