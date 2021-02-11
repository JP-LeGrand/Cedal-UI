import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { FormControl, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  textField: {
    width: "100%",
  },
}));

function EventDetails() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <FormControl
          className={classes.FormControlContent}
          noValidate
          autoComplete="off"
        >
          <Grid item xs={12}>
            <TextField
              id="eventName"
              label="Event Name"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              label="Event description"
              className={classes.textField}
            />
          </Grid>
        </FormControl>
      </Grid>
    </div>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
