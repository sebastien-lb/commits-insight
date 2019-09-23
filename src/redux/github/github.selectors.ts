import { denormalize } from "normalizr";

import { commitListSchema } from "./github.schema";
import { GitCommit } from "./github.types";

import { State } from "../types";

export const getCommitList = (state: State) => {
  if (!(state && state.githubState && state.githubState.commitList)) {
    return [];
  }
  return state.githubState.commitList;
};

export const getAllCommitMessages = (state: State): string[] => {
  if (!(state && state.githubState && state.githubState.commitList)) {
    return [];
  }
  const commitList: GitCommit[] = denormalize(
    state.githubState.commitList,
    commitListSchema,
    state.githubState.entities
  );
  return commitList.map(commit => commit.commit.message);
};
