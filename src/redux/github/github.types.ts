import {
  fetchCommits,
  fetchCommitsSuccess,
  setAccessToken,
  setRepoInfo
} from "./github.actions";

export interface GithubState {
  entities?: any;
  commitList?: number[];
  accessToken?: string;
  repositoryInformation?: RepositoryInformation;
}

export type RepositoryInformation = {
  repositoryName: string;
  owner: string;
};

export interface GitCommit {
  author: any;
  commit: { message: string };
  parents: any[];
  committer: any;
}

export interface GithubResponseData {}

export type GithubAction =
  | ReturnType<typeof fetchCommits>
  | ReturnType<typeof fetchCommitsSuccess>
  | ReturnType<typeof setAccessToken>
  | ReturnType<typeof setRepoInfo>;
