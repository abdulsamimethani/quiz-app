import React from 'react';
import Totalcorrect from './Totalcorrect';
import Totalincorrect from './Totalincorrect';

function Scorearea(props) {
  return (
    <div className="score">
      <Totalcorrect className="correct" correct={props.correct} />
      <Totalincorrect className="incorrect" inCorrect={props.inCorrect} />
    </div>
  );
}

export default Scorearea;
