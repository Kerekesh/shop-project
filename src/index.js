import React from "react";
import ReactDOM from 'react-dom';

function Title() {
    return <h1>Hello, world</h1>
}

const el = (
    <div>
        <Title />
        <Title />
    </div>
)

ReactDOM.render(el, document.getElementById("root"));
