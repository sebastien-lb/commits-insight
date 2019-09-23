import { call, put, takeLatest } from "redux-saga/effects";

import { FETCH_COMMITS } from "./github.constants";
import { fetchCommitsSuccess } from "./github.actions";
import { makeFetchCommitsCall } from "./github.api";

export function* fetchPr() {
  const prData = yield call(makeFetchCommitsCall);
  yield put(fetchCommitsSuccess(prData));
}

export function* githubSaga() {
  yield takeLatest(FETCH_COMMITS, fetchPr);
}
