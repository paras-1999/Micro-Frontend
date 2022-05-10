import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "component/Login"

const App = () => (
  <div className="container">
    {/* <div>Name: application-shell</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div> */}
    <Login />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
