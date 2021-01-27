import React, { useEffect } from "react";
import Availability from "./Availability";
import SpecialTalents from "./SpecialTalents";
import Hobbies from "./Hobbies";
import Interests from "./Interests";
import { Grid } from "@material-ui/core";
import { bindActionCreators } from "redux";
import * as VolunteerActions from "../VolunteerActions";
import { connect } from "react-redux";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  })
);

function getSteps() {
  return ["Special Talents", "Hobbies", "Interests", "Availability"];
}

function ContributionInformation(props) {
  const { nextSectionCallBackRef } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [specialTalentChildRef, setSpecialTalentChildRef] = React.useState({});
  const [interestsChildRef, setInterestsChildRef] = React.useState({});
  const [availabilityChildRef, setAvailabilityChildRef] = React.useState({});
  const [hobbiesChildRef, setHobbiesChildRef] = React.useState({});
  const steps = getSteps();
  const totalSteps = getSteps().length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function isSectionValid(section) {
    switch (section) {
      case 0:
        return validateSpecialTalent();
      case 1:
        return validateHobbies();
      case 2:
        return validateInterests();
      case 3:
        return validateAvailability();
      default:
        return false;
    }
  }

  function validateSpecialTalent() {
    const { contributionInformation, saveContributionInformation } = props;

    let sectionIsValid =
      specialTalentChildRef.validateSpecialTalents() ?? false;
    if (sectionIsValid) {
      contributionInformation.specialTalent = {
        skills: specialTalentChildRef.state,
        otherSkills: specialTalentChildRef.other.other,
      };
      saveContributionInformation(contributionInformation);
      handleNext();
    }
  }

  function validateInterests() {
    const { contributionInformation, saveContributionInformation } = props;

    let sectionIsValid = interestsChildRef?.validateInterests() ?? false;
    if (sectionIsValid) {
      let interestsState = interestsChildRef.state;
      contributionInformation.interests = interestsState;
      saveContributionInformation(contributionInformation);
      handleNext();
    }
    return sectionIsValid;
  }

  function validateAvailability() {
    const { contributionInformation, saveContributionInformation } = props;

    let sectionIsValid = availabilityChildRef?.validateAvailability() ?? false;
    if (sectionIsValid) {
      let availabilityState = availabilityChildRef.state;
      contributionInformation.availability = availabilityState;
      saveContributionInformation(contributionInformation);
      handleNext();
    }
    return sectionIsValid;
  }

  function validateHobbies() {
    const { contributionInformation, saveContributionInformation } = props;

    let sectionIsValid = hobbiesChildRef?.validateHobbies() ?? false;
    if (sectionIsValid) {
      let hobbiesState = hobbiesChildRef.state;
      contributionInformation.hobbies = hobbiesState;
      saveContributionInformation(contributionInformation);
      handleNext();
    }
    return sectionIsValid;
  }

  const navigateToNextSection = () => {
    const totalSections = totalSteps - 1;
    if (activeStep < totalSections) {
      isSectionValid(activeStep);
    }
  };

  const getStepContent = (index) => {
    switch (index) {
      case 0:
        return (
          <SpecialTalents
            contributionInformationRef={setSpecialTalentChildRef}
          />
        );
      case 1:
        return <Hobbies contributionInformationRef={setHobbiesChildRef} />;
      case 2:
        return <Interests contributionInformationRef={setInterestsChildRef} />;
      case 3:
        return (
          <Availability contributionInformationRef={setAvailabilityChildRef} />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    nextSectionCallBackRef({ validateAvailability, activeStep });
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Grid>{getStepContent(index)}</Grid>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      disabled={activeStep === steps.length - 1}
                      variant="contained"
                      color="primary"
                      onClick={navigateToNextSection}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
}

ContributionInformation.propTypes = {
  contributionInformation: PropTypes.object,
  saveContributionInformation: PropTypes.func,
  nextSectionCallBackRef: PropTypes.func,
};

export const mapStateToProps = (state) => {
  const contributionInformation =
    state.volunteerDetails.contributionInformation;
  return {
    contributionInformation: contributionInformation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveContributionInformation: bindActionCreators(
      VolunteerActions.SaveContributionInformation,
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContributionInformation);
