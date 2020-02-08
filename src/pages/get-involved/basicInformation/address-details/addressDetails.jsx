import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { FormControl } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: theme.containers.containerFlexStart,
  root: {
    width: "100%"
  },
  textField: {
    width: "100%"
  }
}));

function AddressDetails() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container >
        <FormControl
          className={classes.FormControlContent}
          noValidate
          autoComplete="off"
        >
          <Grid item xs={12}>
            <TextField
              id="steetName"
              label="Street Name"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField id="city" label="City" className={classes.textField} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="postalCode"
              label="Postal Code"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="province"
              label="Province"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="country"
              label="Country"
              className={classes.textField}
            />
          </Grid>
        </FormControl>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressDetails);
