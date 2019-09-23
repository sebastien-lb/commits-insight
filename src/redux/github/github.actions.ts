import { FETCH_COMMITS, FETCH_COMMITS_SUCCESS } from "./github.constants";

import { GithubResponseData } from "./github.types";

export const fetchCommits = () => ({
  type: FETCH_COMMITS as typeof FETCH_COMMITS
});

export const fetchCommitsSuccess = (data: GithubResponseData) => ({
  type: FETCH_COMMITS_SUCCESS as typeof FETCH_COMMITS_SUCCESS,
  payload: { data }
});
