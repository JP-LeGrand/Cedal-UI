import React from "react";
import ApplicationDisclaimer from "./ApplicationDisclaimer";
import NavigationBar from "../../shared/components/navigation-bar/navigationBar";
import Grid from "@material-ui/core/Grid";

class Volunteer extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <NavigationBar getInvolvedIsActive={true} />
        </Grid>
        <Grid item xs={12}>
          <ApplicationDisclaimer />
        </Grid>
      </Grid>
    );
  }
}

export default Volunteer;
