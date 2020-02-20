import React from "react";
import "./card.css"

function Card (props) {
    let questions = props.questions;
    const listItems = questions.map(question =>
    <li>
      {question.title}
    </li>
  );

    return (
        {listItems}
    );
}

export default Card