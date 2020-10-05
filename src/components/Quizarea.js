import React from 'react';
import Question from './Question';
import AnswerList from './AnswerList';
import UserGreeting from './Usergreeting';

function Quizarea(props) {
  if (props.isFinished) {
    return (<UserGreeting />)
  }
  return (
    <div>
      <h2>Quiz App</h2>
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </div>
  );
}

export default Quizarea;
