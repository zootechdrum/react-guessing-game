import React from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Jumbotron />
    <Wrapper />

    </div>
  );
}

export default App;
