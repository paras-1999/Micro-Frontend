import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";

import "./index.css";

const App = () => (
  <div className="container">
    {/* <div>Name: component-shell</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div> */}
    <Login/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
