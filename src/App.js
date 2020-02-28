import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet'

//Creating a function component called App
const App = () =>{
    return (
        <div>
            <h1>Adopt Me</h1>
            <Pet name = "Luna" animal = "Dog" breed = "Havanese"></Pet>
            <Pet name = "Pepper" animal = "Bird" breed = "Cockatiel"></Pet>
            <Pet name = "Doink" animal = "Cat" breed = "Mix"></Pet>
        </div>
    )
}


ReactDOM.render(<App />,document.getElementById("root"));