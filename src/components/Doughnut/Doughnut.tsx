import React from "react";
import { withStyles, Theme } from "@material-ui/core/styles";
import { Style } from "jss";
import { CSSProperties } from "@material-ui/styles";
import { Doughnut } from "react-chartjs-2";
import { ChartData } from "chart.js";

type ClassNames = "container";
interface OwnProps {
  classes: Record<ClassNames, string>;
  chartData: ChartData;
}

type Props = OwnProps;

export class DoughnutComponent extends React.Component<Props> {
  public render(): JSX.Element {
    const { chartData, classes } = this.props;
    return (
      <div className={classes.container}>
        <Doughnut width={300} height={300} data={chartData} />
      </div>
    );
  }
}

const styles: Style = (theme: Theme): Record<ClassNames, CSSProperties> => ({
  container: {}
});

export default withStyles(styles)(DoughnutComponent);
