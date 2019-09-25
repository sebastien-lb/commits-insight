import axios from "axios";

export const makeFetchCommitsCall = async (
  accessToken: string | undefined,
  repoName: string | undefined,
  owner: string | undefined
) => {
  const rep = await axios.get(
    `https://api.github.com/repos/${owner}/${repoName}/commits?access_token=${accessToken}`
  );
  return rep.data;
};
