import { call, put } from "redux-saga/effects";
import { setQuery } from "../../ducks/query";
import { requestGetQuery } from "../requests/query";

export function* handleGetQuery(action) {
  try {
    const response = yield call(requestGetQuery, action.payload);
    const { data } = response;
    yield put(setQuery(data));
  } catch (err) {
    console.log(err);
  }
}