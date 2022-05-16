import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import {BrowserRouter as Router} from "react-router-dom"
const App = () => (
  <Router>
    <Login/>
  </Router>
  
);
ReactDOM.render(<App />, document.getElementById("app"));