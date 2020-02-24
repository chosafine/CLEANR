import React from 'react';
import Card from '../Card/card';
import Submit from '../Submit/submit';

function Question(props) {
  const { questions } = props;

  return (
    <div>
      {questions.map((question, index) => (
        <Card key={index} {...question} />
      ))}
      <Submit />
    </div>
  );
}

export default Question;
