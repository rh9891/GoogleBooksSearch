import React from "react";
import "./style.css";

function Search() {
  return (
      <>
      <br/>
    <div className="content">
      <article className="message is-primary">
        <div className="message-header">
          <p>Book Search</p>
        </div>
        <div className="message-body">
          <div className="container">
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g. Harry Potter and the Order of the Phoenix"
                />
              </div>
              <div className="control">
                <a className="button is-primary">Search</a>
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
