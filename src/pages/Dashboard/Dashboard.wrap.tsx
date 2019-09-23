import { connect } from "react-redux";
import { Dispatch } from "redux";

import { fetchCommits } from "../../redux/github/github.actions";
import { getAllCommitMessages } from "../../redux/github/github.selectors";
import {
  default as DashboardPage,
  DispatchProps,
  StateProps
} from "./Dashboard";
import { State } from "../../redux/types";

const mapStateToProps = (state: State): StateProps => ({
  commitMessages: getAllCommitMessages(state)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  loadCommits: () => dispatch(fetchCommits())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
