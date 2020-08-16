import React from "react";
import "./style.css";

function Search(props) {
  return (
      <>
      <br/>
    <div className="content">
      <article className="message is-primary">
        <div className="message-header" id="messageHeaderText">
          <p>Book Search</p>
        </div>
        <div className="message-body">
          <div className="container">
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  onChange={props.handleInputChange}
                  value={props.search}
                  name="search"
                  placeholder="e.g. Harry Potter and the Order of the Phoenix"
                  id="searchInputForm"
                />
              </div>
              <div className="control">
                <a 
                onClick={props.handleFormSubmit}
                className="button is-primary" id="searchButtonText">Search</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
    </>
  );
}

export default Search;
