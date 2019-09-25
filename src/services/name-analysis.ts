const DEFAULT_TYPES = [
  "feat",
  "refactor",
  "fix",
  "chore",
  "test",
  "docs",
  "perf"
];

const UNKNOWN_TYPE = "unknown";
const MERGE_TYPE = "merge";

export const isMergeCommit = (commitName: string) => {
  const GITHUB_MERGE_PREFIX = "Merge";
  const beginningOfCommit = commitName.split(" ")[0];
  return beginningOfCommit === GITHUB_MERGE_PREFIX;
};

export const assignCommitType = (
  commitName: string,
  availableTypes: string[] = DEFAULT_TYPES
): string | undefined => {
  const typeWithScope = commitName.split("(")[0];
  const typeWithoutScope = commitName.split(":")[0];
  if (availableTypes.includes(typeWithScope)) {
    return typeWithScope;
  }
  if (availableTypes.includes(typeWithoutScope)) {
    return typeWithoutScope;
  }
  if (isMergeCommit(commitName)) {
    return MERGE_TYPE;
  }
  return undefined;
};

export const countCommitType = (
  commitTypes: Array<string | undefined>
): { [k in string]: number } => {
  return commitTypes.reduce((count: { [k in string]: number }, commitType) => {
    if (commitType === MERGE_TYPE) {
      return { ...count };
    }
    if (commitType && commitType in count) {
      return {
        ...count,
        [commitType]: count[commitType] + 1
      };
    }
    if (commitType) {
      return { ...count, [commitType]: 1 };
    }
    return {
      ...count,
      [UNKNOWN_TYPE]: UNKNOWN_TYPE in count ? count[UNKNOWN_TYPE] + 1 : 1
    };
  }, {});
};
