import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Search from "./components/Search";

function App() {
  return (
    <Wrapper>
    <NavBar />
    <Jumbotron />
    <Search />
    </Wrapper>
  );
}

export default App;
