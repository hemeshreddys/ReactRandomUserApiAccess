import React from "react";
import ReactDOM from "react-dom";
import User from "./User";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Random user API Access</h1>
      <h2>Generates random Male and Female users</h2>
      <User />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
