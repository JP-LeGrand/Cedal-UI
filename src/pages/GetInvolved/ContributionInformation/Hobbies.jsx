import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(1),
  },
  textField: {
    maxWidth: "368px",
    width: "100%",
    paddingBottom: "15px",
  },
}));

function HobbiesComponent(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    hobby: "",
    hobbyError: false,
    hobbyErrorMessage: "",
  });

  const { contributionInformationRef, contributionInformation } = props;

  const handleChange = (name) => (event) => {
    setState({
      ...state,
      [name]: event.target.value,
      [`${name}Error`]: false,
      [`${name}ErrorMessage`]: "",
    });
  };

  const validateHobbies = () => {
    let hobby = state.hobby;

    let hobbyError = !hobby?.trim();
    let hobbyErrorMessage = hobbyError ? "Hobby is required" : "";

    setState({
      hobbyError,
      hobbyErrorMessage,
    });

    return !hobbyError;
  };

  useEffect(() => {
    setState({
      ...state,
      ...contributionInformation?.hobbies,
    });
  }, [contributionInformation?.hobbies]);

  useEffect(() => {
    contributionInformationRef({ state, validateHobbies });
  }, [state]);

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item xs={12}>
        <TextField
          className={classes.textField}
          aria-label="minimum height"
          rowsMax={3}
          multiline
          label={
            "What are your hobbies? Please separate each hobby by a comma e.g. (football, swimming)"
          }
          InputLabelProps={{
            shrink: true,
          }}
          value={state.hobby ?? ""}
          onChange={handleChange("hobby")}
          helperText={state.hobbyErrorMessage}
          error={state.hobbyError}
        />
      </Grid>
    </Grid>
  );
}

HobbiesComponent.propTypes = {
  classes: PropTypes.object,
  contributionInformationRef: PropTypes.func,
  contributionInformation: PropTypes.object,
};

const mapStateToProps = (state) => {
  const contributionInformation =
    state.volunteerDetails.contributionInformation;
  return {
    contributionInformation: contributionInformation,
  };
};

export default connect(mapStateToProps)(HobbiesComponent);
