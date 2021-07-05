import PropTypes from 'prop-types'; // ES6
import React from "react";
import ReactDOM from 'react-dom';

const Title = ({ text, id }) => {
    return (
        <h1>
            Hello, {text}, {id}
        </h1>
    )
}

Title.propTypes = {
    text: PropTypes.string,
    id: PropTypes.number.isRequired,
}

Title.defaultProps = {
    text: "World",
}

const List = () => {
    return (
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    )
}

const el = (
    <>
        <Title text="Jack" id={1} />
        <Title id={2} />
        <List />
    </>
)

ReactDOM.render(el, document.getElementById("root"));
