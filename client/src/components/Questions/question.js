import React from "react";
import Card from "../Card/card";

function Question(props) {
  let questions = props.questions;

  return (
    <div>
      {questions.map(question => (
        <Card key={question.index} {...question} />
      ))}
    </div>
  );
}

export default Question;
