import React, { Component } from 'react';
import classes from './Timer.module.css';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Exercise from '../components/Exercise/Exercise';
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const ExerciseVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
  },
};

let intervals = [];
for (let i = 0; i <= 11; i++) {
  intervals.push(5 + i * 5);
}
class Timer extends Component {
  exercises = [
    'Crunches',
    'Push Ups',
    'Pull Ups',
    'Plank',
    'Squats',
    'Jump Rope',
  ];

  state = {
    userExercises: [
      {
        exercise: 'Warm Up',
        time: '60',
        rest: '20',
      },
    ],
    count: 0,
    done: 0,
    num: 0,
    t: 0,
  };
  addExercise = () => {
    this.setState((prevState, prevProps) => ({
      userExercises: prevState.userExercises.concat({
        exercise: this.props.exer,
        time: this.props.t1,
        rest: this.props.t2,
      }),
    }));
  };

  Start = () => {
    if (this.state.userExercises.length === 0) {
      alert('Please Add Exercise');
    } else {
      this.setState({ count: this.state.userExercises[0].time });
      // let exes = [...this.state.userExercises];
      let number = 0;
      this.myInterval = setInterval(() => {
        // for (let number = 0; number < this.state.userExercises.length; number++) {
        if (this.state.userExercises[number].time > 0) {
          let newState = [...this.state.userExercises];
          newState[number].time -= 1;
          this.setState((prevState) => ({
            userExercises: newState,
          }));
        } else if (this.state.userExercises[number].rest > 0) {
          let newState = [...this.state.userExercises];
          newState[number].rest -= 1;
          this.setState(() => ({
            userExercises: newState,
          }));
        } else if (this.state.userExercises.length - number > 1) number += 1;
        else clearInterval(this.myInterval);
        // }
      }, 1000);
    }
  };

  Pause = () => {
    clearInterval(this.myInterval);
  };

  clear = () => {
    clearInterval(this.myInterval);
    this.setState({ userExercises: [] });
  };
  RemoveExercise = (id) => {
    this.setState(function (prevState, prevProps) {
      let newstate = prevState.userExercises
        .slice(0, id)
        .concat(
          prevState.userExercises.slice(id + 1, prevState.userExercises.length)
        );
      return { userExercises: newstate };
    });
    this.forceUpdate();
  };

  MoveUp = (id) => {
    this.setState((prevState, prevProps) => {
      let newState = [...prevState.userExercises];
      if (id > 0) {
        let x = newState[id];
        newState[id] = newState[id - 1];
        newState[id - 1] = x;
      }
      return { userExercises: newState };
    });
  };

  MoveDown = (id) => {
    this.setState((prevState, prevProps) => {
      let newState = [...prevState.userExercises];
      if (id < newState.length - 1) {
        let x = newState[id];
        newState[id] = newState[id + 1];
        newState[id + 1] = x;
      }
      return { userExercises: newState };
    });
  };
  render() {
    return (
      <div className={classes.container}>
        <h1>Create Your Timer</h1>
        <Input
          label="Exercise"
          clicked={this.props.onSelectingExercise}
          list={this.exercises}
        />
        <Input
          clicked={this.props.onSelectingExerciseTime}
          label="Exercise time ( Seconds )"
          list={intervals}
          def="30"
        />
        <Input
          label="Recovery time ( Seconds )"
          clicked={this.props.onSelectingRestingTime}
          list={intervals}
          def="15"
        />
        <Button logo="fas fa-dumbbell" clicked={this.addExercise}>
          Add Exercise
        </Button>
        {/* <Count
          id="0"
          count1={this.state.userExercises}
          done={this.RemoveExercise}
        /> */}
        <AnimatePresence>
          {this.state.userExercises.map((one, index) => {
            return (
              <motion.div
                drag
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={ExerciseVariants}
                key={index}
              >
                <Exercise
                  indx={index}
                  id={index}
                  exercise={one.exercise}
                  restTime={one.rest}
                  exerciseTime={one.time}
                  toRemove={this.RemoveExercise}
                  toMoveUp={this.MoveUp}
                  toMoveDown={this.MoveDown}
                  arrLength={this.state.userExercises.length}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
        <div style={{ display: 'flex' }}>
          <Button clicked={this.Start} Start>
            Start
          </Button>
          <Button clicked={this.Pause} Pause>
            Pause
          </Button>
          <Button clicked={this.clear} Clear>
            Clear
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    exer: state.exercise,
    t1: state.exerciseTime,
    t2: state.restTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectingExercise: (val) =>
      dispatch({ type: actionTypes.selectExercise, val }),
    onSelectingExerciseTime: (val) =>
      dispatch({ type: actionTypes.selectExerciseTime, val }),
    onSelectingRestingTime: (val) =>
      dispatch({ type: actionTypes.selectRest, val }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
