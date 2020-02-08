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

function ExperienceComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center"></Grid>
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceComponent);
