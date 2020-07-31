import React from 'react';
import classes from './Exercise.module.css';
import Button from '../Button/Button';

const Exercise = (props) => {
  return (
    <div className={classes.Box}>
      <div className={classes.Timing}>
        <p>{props.exercise}</p>
        <p>{props.exerciseTime}</p>
      </div>
      <div className={classes.Timing}>
        <p>Rest</p>
        <p>{props.restTime}</p>
      </div>
      <div>
        <Button clicked={props.toRemove} Id={props.id} exerciseClass>
          Remove
        </Button>
        <Button
          logo="fas fa-arrow-up"
          Id={props.id}
          exerciseClass
          clicked={props.toMoveUp}
          disabled={props.indx === 0 ? true : false}
        >
          Move Up
        </Button>
        <Button
          logo="fas fa-arrow-down"
          Id={props.id}
          exerciseClass
          clicked={props.toMoveDown}
          disabled={props.arrLength === props.indx + 1 ? true : false}
        >
          Move Down
        </Button>
      </div>
    </div>
  );
};
// };

export default Exercise;
