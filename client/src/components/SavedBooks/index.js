import React from "react";
import "./style.css";

function SavedBooks() {
  return (
      <>
     <br />
     <article class="message is-primary">
  <div class="message-header" id="savedBooksHeaderText">
    <p>Saved Books</p>
    <button class="delete" id="savedBooksDeleteButton" aria-label="delete"></button>
  </div>
  <div class="message-body" id="savedBooksResultsDiv">
  </div>
</article>
</>
  );
}

export default SavedBooks;