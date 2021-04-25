import { takeLatest } from "redux-saga/effects";
import { handleGetMovie } from "./handlers/movie";
import { GET_MOVIE } from "../ducks/movie";
import { handleGetPopular } from "./handlers/popular";
import { GET_POPULAR } from "../ducks/popular";

export function* watcherSaga() {
  yield takeLatest(GET_MOVIE, handleGetMovie);
  yield takeLatest(GET_POPULAR, handleGetPopular);
}