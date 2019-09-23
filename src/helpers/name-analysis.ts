const DEFAULT_TYPES = ["feat", "refactor", "fix", "chore", "test"];

export const assignCommitType = (
  commitName: string,
  availableTypes: string[] = DEFAULT_TYPES
): string | undefined => {
  const typeWithScope = commitName.split("(")[0];
  if (availableTypes.includes(typeWithScope)) {
    return typeWithScope;
  }
  return undefined;
};

export const countCommitType = (
  commitTypes: Array<string | undefined>
): { [k in string]: number } => {
  return commitTypes.reduce(
    (count: { [k in string]: number }, commitType) => {
      if (commitType && commitType in count) {
        return {
          ...count,
          total: count.total + 1,
          [commitType]: count[commitType] + 1
        };
      }
      if (commitType) {
        return { ...count, total: count.total + 1, [commitType]: 1 };
      }
      return { ...count, total: count.total + 1 };
    },
    { total: 0 }
  );
};
