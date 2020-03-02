import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

//Creating a function component called App
//searchParams is a function component rendered in the App.js from SearchParams file
const App = () => {
  return (
    <div>
      <h1>Adopt Pets</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
