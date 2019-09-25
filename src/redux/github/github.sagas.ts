import { call, put, select, takeLatest } from "redux-saga/effects";

import { FETCH_COMMITS } from "./github.constants";
import { fetchCommitsSuccess } from "./github.actions";
import { makeFetchCommitsCall } from "./github.api";
import { getAccessToken, getRepositoryInformation } from "./github.selectors";
import { RepositoryInformation } from "./github.types";

export function* fetchCommits() {
  const accessToken = yield select(getAccessToken);
  const repositoryInformation: RepositoryInformation | undefined = yield select(
    getRepositoryInformation
  );
  const repoName: string | undefined =
    repositoryInformation && repositoryInformation.repositoryName;
  const owner: string | undefined =
    repositoryInformation && repositoryInformation.owner;

  const commitsData = yield call(
    makeFetchCommitsCall,
    accessToken,
    repoName,
    owner
  );
  yield put(fetchCommitsSuccess(commitsData));
}

export function* githubSaga() {
  yield takeLatest(FETCH_COMMITS, fetchCommits);
}
