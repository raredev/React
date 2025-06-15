import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
// ReactDOM.createRoot(entryPoint).render(<App />);
// We can also use react built in methods to create element instead of
// relying on built in process
ReactDOM.createRoot(entryPoint).render(React.createElement(App));
