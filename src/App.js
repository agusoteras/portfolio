import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Section from "./components/section/Section";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Section/>
    </div>
  );
}

export default App;
