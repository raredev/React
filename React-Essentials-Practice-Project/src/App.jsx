import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInputs from "./components/UserInputs";

import { initialValues } from "./data";

function App() {
  const [initValues, setValues] = useState(initialValues);

  return (
    <>
      <Header />
      <UserInputs initialValues={initValues} onSetValues={setValues} />
      <Result investmentDetails={initValues} />
    </>
  );
}

export default App;
