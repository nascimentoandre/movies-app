import { takeLatest } from "redux-saga/effects";
import { handleGetMovie } from "./handlers/movie";
import { GET_MOVIE } from "../ducks/movie";

export function* watcherSaga() {
  yield takeLatest(GET_MOVIE, handleGetMovie);
}