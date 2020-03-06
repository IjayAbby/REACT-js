import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from  '@reach/router'
import Details from './Details'
import SearchParams from "./SearchParams";


//Creating a function component called App
//searchParams is a function component rendered in the App.js from SearchParams file
const App = () => {
  return (
    <div>
      <h1 className = "adopt_pets">
        < Link to ="/">Adopt Pets</ Link>
      </h1>
      <Router>
      <SearchParams path = "/" />
      <Details path = "/details/:id" />
      </Router>
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
