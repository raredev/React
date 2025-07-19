export default function Log({ loggerList }) {
  return (
    <ol id="log">
      {loggerList.map((item) => (
        <li>{item}</li>
      ))}
    </ol>
  );
}
