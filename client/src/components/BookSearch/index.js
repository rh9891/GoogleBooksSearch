import React, { Component } from "react";
import Search from "../Search";
import Results from "../Results";
import API from "../../utils/API";

class BookSearch extends Component {
  state = {
    search: "",
    books: []
  };

  componentDidMount() {
    this.searchBook();
  };

  makeBook = bookData => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink
    }
  }

  searchBook = query => {
    API.getBook(query)
      .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
      .catch(err => console.error(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBook(this.state.search);
  }

  render() {
  return (
    <>
    <Search
      search={this.state.search}
      handleInputChange={this.handleInputChange}
      handleFormSubmit={this.handleFormSubmit}
    />
    <br />
     <article className="message is-primary">
        <div className="message-header" id="resultsHeaderText">
          <p>Results</p>
          <button
            className="delete"
            id="bookSearchResultsDeleteButton"
            aria-label="delete"
          ></button>
        </div>
        </article>
    <Results books={this.state.books} />
    </>
);
}
}

export default BookSearch;