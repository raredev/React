import reactImg from "./assets/react-core-concepts.png"; // Importing Images for optimization
import { CORE_CONCEPTS } from "./data";

const keywordItems = ["Fundamental", "Core", "Basic"];

function Header() {
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

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* Or Alternatively if object has same key that matches the props */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
