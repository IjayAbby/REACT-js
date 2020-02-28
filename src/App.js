import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams'

//Creating a function component called App
const App = () =>{
    return (
        <div>
            <h1>Adopt Me</h1>
            <SearchParams/>
        </div>
    )
}


ReactDOM.render(<App />,document.getElementById("root"));