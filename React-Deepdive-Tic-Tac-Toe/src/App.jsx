import Player from "./Components/Player/Player";
import GameBoard from "./Components/GameBoard/GameBoard";
import Log from "./Components/LogComponent/Log";
import GameOver from "./Components/GameOver/GameOver";
import { useState } from "react";

import { WINNINGCOMBINATIONS } from "./combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getActivePlayer(turnsList) {
  let activePlayer = "X";
  if (turnsList.length > 0 && turnsList[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

function getWinner(turnsList) {
  if (turnsList && turnsList.length > 4) {
    for (const combination of WINNINGCOMBINATIONS) {
      const firstSquare =
        initialGameBoard[combination[0].row][combination[0].col];
      const secondSquare =
        initialGameBoard[combination[1].row][combination[1].col];
      const thirdSquare =
        initialGameBoard[combination[2].row][combination[2].col];

      if (
        firstSquare &&
        firstSquare === secondSquare &&
        firstSquare === thirdSquare
      ) {
        return firstSquare;
      }
    }
  }
  if (turnsList.length === 9) {
    return true;
  }
  return false;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [turnsList, setTurnsList] = useState([]);

  if (turnsList.length > 0) {
    const { square, player } = turnsList[0];
    const { row, col } = square;
    initialGameBoard[row][col] = player;
  }

  const activePlayer = getActivePlayer(turnsList);
  let isGameOver = getWinner(turnsList);

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
          board={initialGameBoard}
        />
        {isGameOver && (
          <GameOver winner={isGameOver} isDraw={isGameOver === true} />
        )}
      </div>
      <Log loggerList={turnsList} />
    </main>
  );
}

export default App;
