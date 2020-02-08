import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  highlight: {
    fontWeight: "bold"
  }
}));

export default function MenuAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Grid container spacing={1}>
            <Grid item xs>
              <Typography
                component={Link}
                id="forgotPasswordLabel"
                to="/"
                className={props.homeIsActive ? classes.highlight : ""}
                color="secondary"
              >
                CEDAL
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography
                id="ourWork"
                className={props.ourWorkIsActive ? classes.highlight : ""}
                color="secondary"
              >
                Our Work
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography
                component={Link}
                to="/Volunteer"
                id="getInvolved"
                className={props.getInvolvedIsActive ? classes.highlight : ""}
                color="secondary"
              >
                Get Involved
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography
                component={Link}
                to="/Events-And-News"
                id="eventsAndNewa"
                className={props.eventsAndNewsIsActive ? classes.highlight : ""}
                color="secondary"
              >
                Events and News
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography
                id="donate"
                className={props.donateIsActive ? classes.highlight : ""}
                color="secondary"
              >
                Donate
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
