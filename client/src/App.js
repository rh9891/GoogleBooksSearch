import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import BookSearch from "./components/BookSearch";
import SavedBooks from "./components/SavedBooks";


function App() {
  return (
    <Wrapper>
    <NavBar />
    <Jumbotron />
    <SavedBooks />
    </Wrapper>
  );
}

export default App;
