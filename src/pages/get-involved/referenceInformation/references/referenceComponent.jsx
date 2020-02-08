import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { FormControl } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: theme.spacing(1)
  },
  textField: {
    width: "100%"
  },
  cadContent: theme.paper.applicationFormPaperBlocks
}));

function ReferenceComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <FormControl noValidate autoComplete="off">
          <Grid item xs={12}>
            <TextField
              id="referenceName"
              label="Reference Name"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="referenceMobileNumber"
              label="Reference Mobile Number"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="referenceEmail"
              type="email"
              label="Reference Email"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="referenceRelation"
              label="Reference Relation"
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

export default connect(mapStateToProps, mapDispatchToProps)(ReferenceComponent);
