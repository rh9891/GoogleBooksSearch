import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
    <NavBar />
    <Jumbotron />
    </Wrapper>
  );
}

export default App;
