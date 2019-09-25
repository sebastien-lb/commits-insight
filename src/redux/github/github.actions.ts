import {
  FETCH_COMMITS,
  FETCH_COMMITS_SUCCESS,
  SET_ACCESS_TOKEN,
  SET_REPO_INFO
} from "./github.constants";

import { GithubResponseData, RepositoryInformation } from "./github.types";

export const fetchCommits = () => ({
  type: FETCH_COMMITS as typeof FETCH_COMMITS
});

export const fetchCommitsSuccess = (data: GithubResponseData) => ({
  type: FETCH_COMMITS_SUCCESS as typeof FETCH_COMMITS_SUCCESS,
  payload: { data }
});

export const setAccessToken = (accessToken: string) => ({
  type: SET_ACCESS_TOKEN as typeof SET_ACCESS_TOKEN,
  payload: { accessToken }
});

export const setRepoInfo = (repositoryInformation: RepositoryInformation) => ({
  type: SET_REPO_INFO as typeof SET_REPO_INFO,
  payload: { ...repositoryInformation }
});
