import { useState } from "react";

import TabButton from "../TabButton/TabButton";

import { EXAMPLES } from "../../data";

export default function Examples() {
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
      {tabContent}
    </section>
  );
}
