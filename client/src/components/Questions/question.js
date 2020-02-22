import React from "react";
import Card from "../Card/card";
import Submit from "../Submit/submit";

function Question(props) {
  let questions = props.questions;

  return (
    <div>
      {questions.map(question => (
        <Card key={question.index} {...question} />
      ))}
      <Submit />
    </div>
  );
}

export default Question;
