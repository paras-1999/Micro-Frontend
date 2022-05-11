import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/navigation-bar/NavigationBar";
import Footer from "./components/footer/Footer";
// import "./index.css";

const App = () => (
  <div>
   <NavigationBar/>
   <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
