import axios from "axios";
import { getNextCommitsLink } from "../../services/github-link";

const MAX_PAGE_RETRIEVE = 5;

export const makeFetchCommitsCall = async (
  accessToken: string | undefined,
  repoName: string | undefined,
  owner: string | undefined
) => {
  let rep = await axios.get(
    `https://api.github.com/repos/${owner}/${repoName}/commits?access_token=${accessToken}`
  );
  let nbPageRetrieved = 1;
  let data = rep.data;
  while (rep.headers.link && nbPageRetrieved < MAX_PAGE_RETRIEVE) {
    const nextLink = getNextCommitsLink(rep.headers.link);
    nbPageRetrieved += 1;
    rep = await axios.get(nextLink);
    data = [...data, ...rep.data];
  }
  return data;
};
