import { fetchCommits, fetchCommitsSuccess } from "./github.actions";

export interface GithubState {
  entities?: any;
  commitList?: number[];
}

export interface GitCommit {
  author: any;
  commit: { message: string };
  parents: any[];
  committer: any;
}

export interface GithubResponseData {}

export type GithubAction =
  | ReturnType<typeof fetchCommits>
  | ReturnType<typeof fetchCommitsSuccess>;
