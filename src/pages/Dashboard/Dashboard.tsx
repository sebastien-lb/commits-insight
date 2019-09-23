import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";

import { assignCommitType, countCommitType } from "../../helpers/name-analysis";

interface OwnProps {}

export interface StateProps {
  commitMessages: string[];
}

export interface DispatchProps {
  loadCommits: () => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const DashboardPage: React.FC<Props> = (props: Props) => {
  const { loadCommits } = props;

  const [githubAccessToken, setGithubAccessToken] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGithubAccessToken(event.target.value);
  };

  useEffect(() => {
    loadCommits();
  }, [loadCommits]);

  const commitTypes = (props.commitMessages || []).map(message =>
    assignCommitType(message)
  );
  const commitCounts = countCommitType(commitTypes);
  console.log(commitCounts);

  return (
    <div>
      Dashboard
      <TextField
        label="Github Access Token"
        value={githubAccessToken}
        onChange={handleChange}
      />
      <div></div>
    </div>
  );
};
export default DashboardPage;
