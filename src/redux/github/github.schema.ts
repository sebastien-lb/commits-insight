import { schema } from "normalizr";

import { GitCommit } from "./github.types";

// Define a users schema
export const user = new schema.Entity("user");

export const commitSchema = new schema.Entity<GitCommit>(
  "commit",
  {
    author: user,
    committer: user
  },
  { idAttribute: "sha" }
);

export const commitListSchema = [commitSchema];
