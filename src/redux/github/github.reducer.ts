import { normalize } from "normalizr";

import {
  FETCH_COMMITS_SUCCESS,
  SET_ACCESS_TOKEN,
  SET_REPO_INFO
} from "./github.constants";
import { commitListSchema } from "./github.schema";

import { GithubAction, GithubState } from "./github.types";

export const reducer = (state: GithubState = {}, action: GithubAction) => {
  switch (action.type) {
    case FETCH_COMMITS_SUCCESS:
      const normalizedPrData = normalize(action.payload.data, commitListSchema);
      return {
        ...state,
        entities: {
          ...state.entities,
          commit: normalizedPrData.entities.commit,
          user: normalizedPrData.entities.user
        },
        commitList: normalizedPrData.result
      };

    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload.accessToken
      };

    case SET_REPO_INFO:
      return {
        ...state,
        repositoryInformation: {
          repositoryName: action.payload.repositoryName,
          owner: action.payload.owner
        }
      };

    default:
      return state;
  }
};
