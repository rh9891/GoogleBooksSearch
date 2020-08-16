import React, {Component} from "react";
import "./style.css";
import API from "../../utils/API"

class Results extends Component() {
  state = {
    savedBooks: [],
  }

  componentDidMount() {
    API.savedBooks()
      .then(savedBooks => this.setState({ savedBooks: savedBooks }))
      .catch(err => console.error(err));
  }

  handleSave = book => {
    if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
      API.deleteBook(book._id)
        .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deleteBook._id) }))
        .catch(err => console.error(err));
    } else {
      API.saveBook(book)
        .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook])}))
        .catch(err => console.error(err));
    }
  }

  render() {
  return (
<>
<article className="message is-primary">
  <div className="message-header" id="resultsHeaderText">
    <p>Results</p>
    <button className="delete" id="bookSearchResultsDeleteButton" aria-label="delete"></button>
  </div>

  <div className="message-body" id="bookSearchResultsDiv">
  <div className="columns is-mobile is-desktop">
  <div className="column is-1"></div>
  <div className="column is-3">
  <figure className="image is-128x128">
  <img src="https://bulma.io/images/placeholders/128x128.png" />
  </figure>
  </div>
  <div className="column">
  <h5 className="bookTitle"></h5>
  <p className="bookDescriptionText"></p>
  </div>
  <div className="column is-2">
  <div className="buttons">
  <button className="button is-primary" id="viewButton">View</button>
  <button className="button is-primary" id="saveButton">Save</button>
  </div>
  </div>
  </div>
  </div>
</article>
</>
  );
}
}

export default Results;