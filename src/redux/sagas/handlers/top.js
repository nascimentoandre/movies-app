import { call, put } from "redux-saga/effects";
import { setTop } from "../../ducks/top";
import { requestGetTop } from "../requests/top";

export function* handleGetTop(action) {
  try {
    const response = yield call(requestGetTop);
    const { data } = response
    yield put(setTop(data));
  } catch (err) {
    console.log(err);
  }
}