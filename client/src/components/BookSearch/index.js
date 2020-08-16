import React, { Component } from "react";
import Search from "../Search";
import Results from "../Results";
import API from "../../utils/API";

class BookSearch extends Component() {
  render() {
  return (
    <>
    <Search 
    />
    <Results />
    </>
);
}
}

export default BookSearch;