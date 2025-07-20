export default function Log({ loggerList = [] }) {
  return (
    <ol id="log">
      {loggerList.map((item) => (
        <li key={`${item.square.row}${item.square.col}`}>
          {item.player} selected {item.square.row},{item.square.col}
        </li>
      ))}
    </ol>
  );
}
