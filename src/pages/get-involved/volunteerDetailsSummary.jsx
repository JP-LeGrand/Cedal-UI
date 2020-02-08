import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

class VolunteerDetailsSummary extends React.Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Typography>VolunteerDetailsSummary</Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VolunteerDetailsSummary);
