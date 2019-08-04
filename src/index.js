import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles.css";

function Application() {
  return (
    <div className="App">
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);
