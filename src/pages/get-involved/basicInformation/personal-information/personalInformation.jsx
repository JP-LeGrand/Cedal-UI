import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextareaAutosize
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

function PersonalInformation(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={12}>
          <p>{props.Information}</p>
        </Grid>
        <FormControl noValidate autoComplete="off">
          <Grid item xs={12}>
            <FormLabel component="legend">
              Do you have a driver's licence?
            </FormLabel>
            <RadioGroup
              defaultValue="driversLicence"
              aria-label="driversLicence"
              name="customized-radios"
            >
              <FormControlLabel
                value="1"
                control={<StyledRadio />}
                label="Yes"
              />
              <FormControlLabel
                value="2"
                control={<StyledRadio />}
                label="No"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">Do you ownn a car?</FormLabel>
            <RadioGroup
              defaultValue="disabilities"
              aria-label="disabilities"
              name="customized-radios"
            >
              <FormControlLabel
                value="1"
                control={<StyledRadio />}
                label="Yes"
              />
              <FormControlLabel
                value="2"
                control={<StyledRadio />}
                label="No"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">
              Do you have any disabilities?
            </FormLabel>
            <RadioGroup
              defaultValue="disabilities"
              aria-label="disabilities"
              name="customized-radios"
            >
              <FormControlLabel
                value="1"
                control={<StyledRadio />}
                label="Yes"
              />
              <FormControlLabel
                value="2"
                control={<StyledRadio />}
                label="No"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <FormLabel component="legend">Disability Details</FormLabel>
            <TextareaAutosize
              className={classes.textField}
              aria-label="minimum height"
              rowsMin={3}
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
)(PersonalInformation);
