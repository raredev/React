export default function TabButton({ children }) {
  function handleClick() {
    console.log("Button was clicked!");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
