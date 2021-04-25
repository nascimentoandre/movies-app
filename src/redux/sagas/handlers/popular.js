import { call, put } from "redux-saga/effects";
import { setPopular } from "../../ducks/popular";
import { requestGetPopular } from "../requests/popular";

export function* handleGetPopular(action) {
  try {
    const response = yield call(requestGetPopular);
    const { data } = response
    yield put(setPopular(data));
  } catch (err) {
    console.log(err);
  }
}