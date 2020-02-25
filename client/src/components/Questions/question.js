import React from 'react';
import Card from '../Card/card';
import Submit from '../Submit/submit';
import StartOver from "../Start Over/startover";
import Booking from "../Booking/booking";

function Question(props) {
  const { questions } = props;

  return (
    <div>
      {questions.map((question, index) => (
        <Card key={index} {...question} />
      ))}
      <Submit />
      <StartOver />
      <Booking />
    </div>
  );
}

export default Question;
