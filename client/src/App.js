import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
// import BookSearch from "./components/BookSearch";
import SavedBooks from "./components/SavedBooks";


function App() {
  return (
    <>
    <Router>
    <Wrapper>
    <NavBar />
    <Jumbotron />
    <SavedBooks />
    </ Wrapper>
    </ Router>
    </>
  );
}

export default App;
