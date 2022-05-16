import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Register from "./authenticate/Register";

// import "./index.css";

const App = () => (
  <Router>
    <Register/>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
