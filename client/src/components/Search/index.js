import React from "react";
import "./style.css";

function Search() {
  return (
    <div className="content">
        <div className="field has-addons">
        <div className="control">
            <input className="input" type="text" placeholder="Find a repository"/>
        </div>
        <div className="control">
            <a className="button is-info">
            Search
            </a>
        </div>
        </div>
    </div>
);
}

export default Search;