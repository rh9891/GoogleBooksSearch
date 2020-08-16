import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class Results extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then(savedBooks => this.setState({ savedBooks: savedBooks }))
      .catch(err => console.error(err));
  }

  handleSave = book => {
    if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
      API.deleteBook(book._id)
        .then(deletedBook =>
          this.setState({
            savedBooks: this.state.savedBooks.filter(
              book => book._id !== deletedBook._id)
          })
        )
        .catch(err => console.error(err))
    } else {
      API.saveBook(book)
        .then(savedBook =>
          this.setState({
            savedBooks: this.state.savedBooks.concat([savedBook])
          })
        )
        .catch(err => console.error(err));
    }
  };

  render() {
    return (
      <article className="message is-primary">
        <div className="message-header" id="resultsHeaderText">
          <p>Results</p>
          <button
            className="delete"
            id="bookSearchResultsDeleteButton"
            aria-label="delete"
          ></button>
        </div>

        <div>
          {!this.props.books.length ? (
            <h2 className="noResultsDisplay">
              No information available for this book.
            </h2>
          ) : (
            <div>
              {this.props.books.map((result) => (
                <div
                  className="message-body"
                  id="bookSearchResultsDiv"
                  key={result._id}
                >
                  <div className="columns is-mobile is-desktop">
                    <div className="column is-1"></div>
                    <div className="column is-3">
                      <figure className="image is-128x128">
                        <img alt={result.title} src={result.image} />
                      </figure>
                    </div>
                    <div className="column">
                      <h5 className="bookTitle">
                        {result.title} by {result.authors}
                      </h5>
                      <p className="bookDescriptionText">
                        {result.description}
                      </p>
                    </div>
                    <div className="column is-2">
                      <div className="buttons">
                        <button
                          href={result.link}
                          className="button is-primary"
                          id="viewButton"
                          target="_blank"
                        >
                          View
                        </button>
                        <button
                          onClick={() => this.handleSave(result)}
                          className="button is-primary"
                          id="saveButton"
                        >
                          {this.state.savedBooks
                            .map((book) => book.id)
                            .includes(result._id)
                            ? "Unsave"
                            : "Save"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }
}
export default Results;