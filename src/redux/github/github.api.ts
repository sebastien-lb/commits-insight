import axios from "axios";

const PERSONNAL_TOKEN = "";

export const makeFetchCommitsCall = async () => {
  const rep = await axios.get(
    `https://api.github.com/repos/sebastien-lb/masterit/commits?access_token=${PERSONNAL_TOKEN}`
  );
  return rep.data;
};
