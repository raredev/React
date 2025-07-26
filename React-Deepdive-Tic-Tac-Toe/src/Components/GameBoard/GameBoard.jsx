export default function GameBoard({ onSelectSquare, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSquareClick(rowIndex, colIndex) {
  //     setGameBoard((previousGameBoard) => {
  //       const newGameBoard = previousGameBoard.map((innerElement) => [
  //         ...innerElement,
  //       ]); // Best Way of React Practice of updating the objects/array by creating a shallow copy
  //       newGameBoard[rowIndex][colIndex] = activeSymbol;
  //       return newGameBoard;
  //     });
  //     onSelectSquare(rowIndex, colIndex);
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={col !== null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
