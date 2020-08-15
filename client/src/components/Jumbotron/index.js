import React from "react";
import "./style.css";

function Jumbotron() {
  return (
<section className="hero is-primary is-medium">
  <div className="hero-body">
    <div className="container">
      <h1 className="title" id="heroTitle">
        (React) Google Books Search
      </h1>
      <br />
      <h2 className="subtitle" id="heroSubtitle">
        Search for and Save Books of Interest
      </h2>
    </div>
  </div>
</section>
);
}

export default Jumbotron;