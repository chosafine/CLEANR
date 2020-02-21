import React from "react";
import "./card.css";

function Card(props) {

  return (
    <div className="company-card">
      <p>{props.title}</p>
      {props.choices.map(choice => (
      <div>
        <input type="radio" key="{choice.value}" defaultValue="{choice.value}" />
        <label htmlFor="{choice.value}">{choice.value}</label>
      </div>
      ))}
    </div>
  );
}

export default Card;
