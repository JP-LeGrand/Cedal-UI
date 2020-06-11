import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { FormControl, Button } from "@material-ui/core";
import AddressDetails from "../getInvolved/PersonalInformation/AddressDetails/AddressDetails";
import EventDetails from "./EventDetails";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: theme.spacing(1)
  },
  textField: {
    width: "100%"
  }
}));

function EventsComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" spacing={1}>
        <FormControl noValidate autoComplete="off">
          <Grid item xs={12}>
            <EventDetails />
          </Grid>
          <Grid item xs={12}>
            <AddressDetails />
          </Grid>
        </FormControl>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EventsComponent);
