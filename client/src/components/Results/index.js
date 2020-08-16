import React from "react";
import "./style.css";

function Results() {
  return (
<>
<br />
<article class="message is-primary">
  <div class="message-header" id="resultsHeaderText">
    <p>Results</p>
    <button class="delete" id="deleteButton" aria-label="delete"></button>
  </div>
  <div class="message-body" id="resultsDiv">
  </div>
</article>
</>
  );
}

export default Results;