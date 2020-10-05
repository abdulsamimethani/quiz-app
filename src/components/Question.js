import React from 'react';

function Question(props) {

  console.log(props.dataSet.question)
  return (
    <div>
        <h1>{props.dataSet.question}</h1>
    </div>
  );
}

export default Question;
