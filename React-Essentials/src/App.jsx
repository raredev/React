import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcept/CoreConcepts";
import Examples from "./components/Examples/Examples";

function App() {
  return (
    <>
      {/** We can avoid this unnecessary div by using Fragment component from the react
       * or simply wrapping under <> </> tag */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
