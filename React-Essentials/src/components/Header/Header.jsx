import reactImg from "../../assets/react-core-concepts.png"; // Importing Images for optimization
import "./Header.css";

const keywordItems = ["Fundamental", "Core", "Basic"];

export default function Header() {
  const keywordItem =
    keywordItems[Math.floor(Math.random() * keywordItems.length)]; // Outputting dynamic value
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Basic + Essentials</h1>
      <p>
        {keywordItem} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
