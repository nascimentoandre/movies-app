import { takeLatest } from "redux-saga/effects";
import { handleGetMovie } from "./handlers/movie";
import { GET_MOVIE } from "../ducks/movie";
import { handleGetPopular } from "./handlers/popular";
import { GET_POPULAR } from "../ducks/popular";
import { handleGetTop } from "./handlers/top";
import { GET_TOP } from "../ducks/top";
import { handleGetQuery } from "./handlers/query";
import { GET_QUERY } from "../ducks/query";

export function* watcherSaga() {
  yield takeLatest(GET_MOVIE, handleGetMovie);
  yield takeLatest(GET_POPULAR, handleGetPopular);
  yield takeLatest(GET_TOP, handleGetTop);
  yield takeLatest(GET_QUERY, handleGetQuery);
}