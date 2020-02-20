import React from "react";
import { homeCleaning } from "../../utils/questions";
import Card from "../Card/card";

function Question() {
  const questions = homeCleaning.questions;
  return (
    <div>
      {questions.map(question => (
        <Card key={question.index} {...question} />
      ))}
    </div>
  );
}

export default Question;
