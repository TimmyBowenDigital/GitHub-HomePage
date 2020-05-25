import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Competencies from "./Components/Competencies";
import ExampleWork from "./Components/ExampleWork";
import Bio from "./Components/Bio";

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Competencies />
      <ExampleWork />
    </div>
  );
}

export default App;
