import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { createAction, handleActions } from "redux-actions";

const GET_USER = "users/GET_USER";
const GET_USER_SUCCESS = "users/GET_USER_SUCCESS";
const GET_USER_FAILURE = "users/GET_USER_FAILURE";

export const getUser = createAction(GET_USER, (id) => id);
const getUserSuccess = createAction(GET_USER_SUCCESS, (data) => data);
const getUserFailure = createAction(GET_USER_SUCCESS, (error) => error);

const getUserById = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

function* getUserSaga(action) {
  try {
    const response = yield call(getUserById, action.payload);
    yield put(getUserSuccess(response.data));
  } catch (e) {
    yield put(getUserFailure(e));
  }
}

export function* usersSaga() {
  yield takeEvery(GET_USER, getUserSaga);
}

const initialState = {
  user: null,
  loading: {
    user: false,
  },
  error: {
    user: null,
  },
};

const user = handleActions(
  {
    [GET_USER]: (state) => ({
      ...state,
      loading: { ...state.loading, user: true },
      error: { ...state.error, user: null },
    }),
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      loading: { ...state.loading, user: false },
      user: action.payload,
    }),
    [GET_USER_FAILURE]: (state, action) => ({
      ...state,
      loading: { ...state.loading, user: false },
      error: { ...state.error, user: action.payload },
    }),
  },
  initialState
);

export default user;
