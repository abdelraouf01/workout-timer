import React from 'react';
import classes from './Input.module.css';
const Input = (props) => {
  return (
    <div>
      <label className={classes.Label}>{props.label}</label>
      <div className={classes.Selection}>
        <select
          defaultValue={props.def}
          onChange={(e) => props.clicked(e.target.value)}
        >
          {props.list.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <p className={classes.arrow}>
          <i className="fas fa-arrow-down"></i>
        </p>
      </div>
    </div>
  );
};

export default Input;
