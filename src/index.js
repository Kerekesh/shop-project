import React from "react";
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <h1>
            Hello, App.js
        </h1>
    )
}

const el = (
    <>
        <App />
    </>
)

ReactDOM.render(el, document.getElementById("root"));
