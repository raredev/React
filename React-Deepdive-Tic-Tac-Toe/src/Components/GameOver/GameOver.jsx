export default function GameOver({ winner, isDraw, restartHandler }) {
  return (
    <div id="game-over">
      {!isDraw && <p>{winner} won!</p>}
      {isDraw && <p>It's a Draw</p>}
      <button onClick={restartHandler}>Rematch!</button>
    </div>
  );
}
