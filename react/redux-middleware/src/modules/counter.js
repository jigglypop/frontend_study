import { createAction, handleActions } from "redux-actions";

const INCREASE = "couner/INCREASE";
const DECREASE = "couner/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 2000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 2000);
};
const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state, actions) => state + 1,
    [DECREASE]: (state, actions) => state - 1,
  },
  initialState
);

export default counter;
