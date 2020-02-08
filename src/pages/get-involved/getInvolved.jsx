import React from "react";
import { connect } from "react-redux";
import ApplicationDisclaimer from "./applicationDisclaimer";
import NavigationBar from "../../shared/components/navigation-bar/navigationBar";
import Grid from "@material-ui/core/Grid";

class Volunteer extends React.Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <NavigationBar getInvolvedIsActive={true} />
          </Grid>
          <Grid item xs={12}>
            <ApplicationDisclaimer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Volunteer);
