import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  TextField,
  Checkbox,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Collections from "../../../shared/Collections/Collections";
import * as Colors from "../../../shared/styles/themes/colours";

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
  checked: {
    color: `${Colors.oceangreen} !important`,
  },
}));

function SpecialTalents(props) {
  const classes = useStyles();
  const [state, setState] = React.useState([]);
  const [other, setOther] = React.useState({
    other: "",
    otherError: false,
    otherErrorMessage: "",
  });
  const { contributionInformationRef, contributionInformation } = props;

  useEffect(() => {
    if (state.length === 0) {
      setState(Collections.Skills);
    }
  }, [state.length]);

  const handleChange = (index) => (event) => {
    let skills = [...state];
    skills[index] = {
      ...state[index],
      isChecked: event.target.checked,
    };
    setState(skills);

    if (index === state.length - 1 && !state[state.length - 1].isChecked) {
      setOther({
        ...other,
        other: "",
        otherError: false,
        otherErrorMessage: "",
      });
    }
  };

  const handleTextChange = (name) => (event) => {
    setOther({
      ...state,
      [name]: event.target.value,
      [`${name}Error`]: false,
      [`${name}ErrorMessage`]: "",
    });
  };

  const validateSpecialTalents = () => {
    let otherChecked = state[state.length - 1]?.isChecked;
    let otherErrorMessage = "";
    let otherError = false;
    if (otherChecked) {
      otherError = other.other?.trim().length <= 1;
      if (otherError) {
        otherErrorMessage = "Please enter other skills";
      }
    }

    setOther({
      otherError,
      otherErrorMessage,
    });

    return !otherError;
  };

  useEffect(() => {
    if (contributionInformation?.specialTalent?.skills) {
      setState([...state, ...contributionInformation.specialTalent.skills]);
    }
  }, [contributionInformation.specialTalent]);

  useEffect(() => {
    contributionInformationRef({ state, other, validateSpecialTalents });
  }, [state]);

  return (
    <Grid container justify={"center"}>
      <Grid item xs={12}>
        <FormControl noValidate autoComplete="off">
          <Grid item xs={12}>
            <FormLabel component="legend">
              Which of the following skills do you have? (Optional)
            </FormLabel>
            <FormGroup>
              {state.map((skill, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={skill.isChecked}
                      onChange={handleChange(index)}
                      classes={{
                        checked: classes.checked,
                      }}
                    />
                  }
                  label={skill.skill}
                />
              ))}
            </FormGroup>
          </Grid>
          {state[state.length - 1]?.isChecked ? (
            <Grid item xs={12}>
              <TextField
                onChange={handleTextChange("other")}
                label="Other skills you have"
                multiline={true}
                rowsMax={3}
                value={other.other}
                className={classes.textField}
              />
            </Grid>
          ) : null}
        </FormControl>
      </Grid>
    </Grid>
  );
}

SpecialTalents.propTypes = {
  classes: PropTypes.object,
  contributionInformationRef: PropTypes.func,
  contributionInformation: PropTypes.object,
};

export const mapStateToProps = (state) => {
  const contributionInformation =
    state.volunteerDetails.contributionInformation;
  return {
    contributionInformation: contributionInformation,
  };
};

export default connect(mapStateToProps)(SpecialTalents);
