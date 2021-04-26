import { call, put } from "redux-saga/effects";
import { setMovie } from "../../ducks/movie";
import { requestGetMovie } from "../requests/movie";

export function* handleGetMovie(action) {
  try {
    const response = yield call(requestGetMovie, action.payload);
    const { data } = response
    yield put(setMovie(data));
  } catch (err) {
    console.log(err);
  }
}