//Creating a function component called pet
const Pet = () => { 
    return React.createElement("div",null[
        React.createElement("h1",null,"Luna"),
        React.createElement("h2",null,"Dog"),
        React.createElement("h2",null,"Havanese")
    ])
}

const App = () => {
    return React.createElement("div",null,[
        React.createElement("h1",null,"Adopt Me"),
        React.createElement(Pet)
    ])
}
ReactDOM.render(React.createElement(App),
document.getElementById("root"));