import reactImg from "./assets/react-core-concepts.png"; // Importing Images for optimization

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
              title="Components"
              description="Short Description about Components"
              image={reactImg}
            />
            <CoreConcept
              title="JSX"
              description="Short Description about JSX"
              image={reactImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
