export default function GameOver({ winner, isDraw }) {
  debugger;
  return (
    <div id="game-over">
      {!isDraw && <p>{winner} won!</p>}
      {isDraw && <p>It's a Draw</p>}
      <button>Rematch!</button>
    </div>
  );
}
