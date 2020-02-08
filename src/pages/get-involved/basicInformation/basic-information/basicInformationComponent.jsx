import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: theme.spacing(1)
  },
  textField: {
    width: "100%"
  },
  cadContent: theme.paper.applicationFormPaperBlocks,
  rootRadio: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""'
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3"
    }
  }
}));

function BasicInformation(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={12}>
          <p>{props.Information}</p>
        </Grid>
        <FormControl noValidate autoComplete="off">
          <Grid item xs={12}>
            <FormLabel component="legend">First Name</FormLabel>
            <TextField id="firstName" className={classes.textField} />
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">Last Name</FormLabel>
            <TextField id="lastName" className={classes.textField} />
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">Date Of Birth</FormLabel>
            <TextField
              id="dateOfBirth"
              type="datetime-local"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">Contact Number</FormLabel>
            <TextField id="contactNumber" className={classes.textField} />
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">Email Address</FormLabel>
            <TextField
              id="emailAddress"
              type="email"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">Identity Number</FormLabel>
            <TextField id="identityNumber" className={classes.textField} />
          </Grid>

          <Grid item xs={12}>
            <FormLabel component="legend">Marital Status</FormLabel>
            <RadioGroup
              defaultValue="Marital Status"
              aria-label="Marital Status"
              name="customized-radios"
            >
              <FormControlLabel
                value="1"
                control={<StyledRadio />}
                label="Single"
              />
              <FormControlLabel
                value="2"
                control={<StyledRadio />}
                label="Married"
              />
              <FormControlLabel
                value="3"
                control={<StyledRadio />}
                label="Divorced"
              />
            </RadioGroup>
          </Grid>
        </FormControl>
      </Grid>
    </div>
  );
}

function StyledRadio(props: RadioProps) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.rootRadio}
      disableRipple
      color="default"
      checkedIcon={<span className={(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BasicInformation);
