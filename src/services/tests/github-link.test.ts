import { getNextCommitsLink } from "../github-link";

describe("Services ", (): void => {
  describe("Github-link ", (): void => {
    it("getNextCommitsLink should return the next link in giithub response", (): void => {
      const linkResponse = `<https://api.github.com/repositories/191343437/commits?page=25>; rel="next", <https://api.github.com/repositories/191343437/commits?page=31>; rel="last", <https://api.github.com/repositories/191343437/commits?page=1>; rel="first", <https://api.github.com/repositories/191343437/commits?page=23>; rel="prev"`;
      const expectedValue =
        "https://api.github.com/repositories/191343437/commits?page=25";
      expect(getNextCommitsLink(linkResponse)).toEqual(expectedValue);
    });
  });
});
