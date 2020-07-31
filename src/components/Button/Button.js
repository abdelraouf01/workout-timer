import React from 'react';
import classes from './Button.module.css';
const Button = (props) => {
  let names = [];
  names.push(classes.Button);
  if (props.exerciseClass) {
    names.push(classes.Exercise);
  } else if (props.Pause) {
    names.push(classes.Pause);
  } else if (props.Start) {
    names.push(classes.Start);
  } else if (props.Clear) {
    names.push(classes.Clear);
  }
  if (props.disabled) {
    names.push(classes.disabled);
  }
  return (
    <button className={names.join(' ')} onClick={() => props.clicked(props.Id)}>
      <i className={props.logo} style={{ marginRight: '5px' }}></i>
      {props.children}
    </button>
  );
};

export default Button;
