import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  fetchCommits,
  setAccessToken,
  setRepoInfo
} from "../../redux/github/github.actions";
import {
  getAccessToken,
  getAllCommitMessages,
  getRepositoryInformation
} from "../../redux/github/github.selectors";
import {
  default as DashboardPage,
  DispatchProps,
  StateProps
} from "./Dashboard";
import { State } from "../../redux/types";

const mapStateToProps = (state: State): StateProps => ({
  commitMessages: getAllCommitMessages(state),
  repositoryInformation: getRepositoryInformation(state),
  accessToken: getAccessToken(state)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  loadCommits: () => dispatch(fetchCommits()),
  setAccessToken: (accessToken: string) =>
    dispatch(setAccessToken(accessToken)),
  setRepoInfo: (repositoryName: string, owner: string) =>
    dispatch(setRepoInfo({ repositoryName, owner }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
