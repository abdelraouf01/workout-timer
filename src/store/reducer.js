import * as actionTypes from './actions.js';
const initialState = {
  exercise: 'Crunches',
  exerciseTime: '30',
  restTime: '15',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.selectExercise:
      return {
        ...state,
        exercise: action.val,
      };

    case actionTypes.selectExerciseTime:
      console.log(state.exercise);
      return {
        ...state,
        exerciseTime: action.val,
      };
    case actionTypes.selectRest:
      return {
        ...state,
        restTime: action.val,
      };
    default:
      return state;
  }
};

export default reducer;
