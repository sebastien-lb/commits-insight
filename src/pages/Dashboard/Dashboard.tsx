import React from "react";
import { withStyles, Theme } from "@material-ui/core/styles";
import { Style } from "jss";
import { CSSProperties } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { assignCommitType, countCommitType } from "../../helpers/name-analysis";
import { RepositoryInformation } from "../../redux/github/github.types";

type ClassNames = "container" | "submitButton";
interface OwnProps {
  classes: Record<ClassNames, string>;
}

export interface StateProps {
  commitMessages: string[];
  repositoryInformation: RepositoryInformation | undefined;
  accessToken: string | undefined;
}

export interface DispatchProps {
  loadCommits: () => void;
  setAccessToken: (accessToken: string) => void;
  setRepoInfo: (repositoryName: string, owner: string) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const DashboardPage: React.FC<Props> = (props: Props) => {
  const {
    accessToken,
    classes,
    loadCommits,
    repositoryInformation,
    setAccessToken,
    setRepoInfo
  } = props;

  const [githubAccessToken, setGithubAccessToken] = React.useState(
    accessToken || ""
  );

  const [repoName, setRepoName] = React.useState(
    (repositoryInformation && repositoryInformation.repositoryName) || ""
  );
  const [owner, setOwner] = React.useState(
    (repositoryInformation && repositoryInformation.owner) || ""
  );

  const handleChangeAccessToken = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGithubAccessToken(event.target.value);
  };

  const handleChangeRepositoryName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepoName(event.target.value);
  };

  const handleChangeOwner = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOwner(event.target.value);
  };

  const onSubmit = () => {
    setAccessToken(githubAccessToken);
    setRepoInfo(repoName, owner);
    loadCommits();
  };

  const commitTypes = (props.commitMessages || []).map(message =>
    assignCommitType(message)
  );
  const commitCounts = countCommitType(commitTypes);
  console.log(commitCounts);

  return (
    <div className={classes.container}>
      Dashboard
      <TextField
        label="Github Access Token"
        value={githubAccessToken}
        onChange={handleChangeAccessToken}
      />
      <TextField
        label="Repo Name"
        value={repoName}
        onChange={handleChangeRepositoryName}
      />
      <TextField label="Owner" value={owner} onChange={handleChangeOwner} />
      <Button className={classes.submitButton} onClick={onSubmit}>
        Fetch Commits
      </Button>
      <div></div>
    </div>
  );
};

const styles: Style = (theme: Theme): Record<ClassNames, CSSProperties> => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  submitButton: {
    marginTop: theme.spacing(4)
  }
});

export default withStyles(styles)(DashboardPage);
