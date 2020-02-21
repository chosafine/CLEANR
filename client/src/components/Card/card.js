import React from "react";
import "./card.css";


function Card(props) {

  return (
    <div className="company-card">
      <p>{props.title}</p>
      {props.choices.map(choice => (
        <button type="checkbox" key="{choice.value}">{choice.value}</button> 
      ))}
    </div>
  );
}

export default Card;
