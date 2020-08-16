import React from "react";
import "./style.css";

function Results() {
  return (
<>
<br />
<article class="message is-primary">
  <div class="message-header" id="resultsHeaderText">
    <p>Results</p>
    <button class="delete" id="bookSearchResultsDeleteButton" aria-label="delete"></button>
  </div>
  <div class="message-body" id="bookSearchResultsDiv">
  </div>
</article>
</>
  );
}

export default Results;