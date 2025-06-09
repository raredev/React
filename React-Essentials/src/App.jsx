import { useState } from "react";

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  // Registering a variable which is handled by react
  const [initialButtonContent, setButtonContent] = useState(); // useState function or hook returns an array which contains exactly two elements

  function OnSelectHandler(selectedButton) {
    setButtonContent(selectedButton);
  }

  let tabContent = <p>Please select one of the button</p>;
  if (initialButtonContent) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[initialButtonContent]["title"]}</h3>
        <p>{EXAMPLES[initialButtonContent]["description"]}</p>
        <pre>
          <code>{EXAMPLES[initialButtonContent]["code"]}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        {/* {[<p>Hello</p>,<p>World</p>]} > We can render list item directly */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={initialButtonContent === "components"}
              onSelect={() => OnSelectHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={initialButtonContent === "jsx"}
              onSelect={() => OnSelectHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={initialButtonContent === "props"}
              onSelect={() => OnSelectHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={initialButtonContent === "state"}
              onSelect={() => OnSelectHandler("state")}
            >
              State
            </TabButton>
          </menu>
          {/* One way of conditional rendering */}
          {/* {!initialButtonContent ? (
            <p>Please select one of the button</p>
          ) : null}
          {initialButtonContent && (
            <div id="tab-content">
              <h3>{EXAMPLES[initialButtonContent]["title"]}</h3>
              <p>{EXAMPLES[initialButtonContent]["description"]}</p>
              <pre>
                <code>{EXAMPLES[initialButtonContent]["code"]}</code>
              </pre>
            </div>
          )} */}
          {/* Another way is to store the jsx content into a variable */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
