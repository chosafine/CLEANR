import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="company-card">
      <p>{props.title}</p>
      {props.choices.map(choice => (
        <li key={choice.value}>{choice.value}</li>
      ))}
    </div>
  );
}

export default Card;
