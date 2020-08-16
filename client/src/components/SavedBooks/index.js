import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import Results from "../Results";

class SavedBooks extends Component() {
  state = {
    savedBooks: [],
  }

  componentDidMount() {
    API.savedBooks()
      .then(savedBooks => this.setState({ savedBooks: savedBooks }))
      .catch(err => console.error(err));
  }

  render() {
  return (
      <>
     <br />
     <article className="message is-primary">
  <div className="message-header" id="savedBooksHeaderText">
    <p>Saved Books</p>
    <button className="delete" id="savedBooksDeleteButton" aria-label="delete"></button>
  </div>
  <div className="message-body" id="savedBooksResultsDiv">
    <Results books={this.state.savedBooks} />
  </div>
</article>
</>
  );
}
}

export default SavedBooks;