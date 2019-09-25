export const getNextCommitsLink = (link: string) => {
  const nextLink = link.split(";")[0];
  return nextLink.slice(1, nextLink.length - 1);
};
