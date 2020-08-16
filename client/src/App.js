import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import BookSearch from "./components/BookSearch";

function App() {
  return (
    <Wrapper>
    <NavBar />
    <Jumbotron />
    <BookSearch />
    </Wrapper>
  );
}

export default App;
