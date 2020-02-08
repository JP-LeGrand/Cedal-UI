import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import BasicInformation from "../get-involved/basicInformation/basic-information/basicInformation";
import ReferenceInformation from "../get-involved/referenceInformation/references/references";
import Grid from "@material-ui/core/Grid";
import NavigationBar from "../../shared/components/navigation-bar/navigationBar";
import Experience from "../get-involved/experienceInformation/education-and-experience/experience";
import Screening from "../get-involved/screeningInformation/screening/screening";
import { Stepper, Step, StepLabel, Container } from "@material-ui/core";
import VolunteerDetailsSummary from "./volunteerDetailsSummary";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  backButton: {
    marginRight: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Personal", "Experience", "References", "Screening", "Summary"];
}

const getStepContent = stepIndex => {
  switch (stepIndex) {
    case 0:
      return <BasicInformation />;
    case 1:
      return <Experience />;
    case 2:
      return <ReferenceInformation />;
    case 3:
      return <Screening />;
    case 4:
      return <VolunteerDetailsSummary />;
    default:
      return "";
  }
};

export default function HorizontalNonLinearAlternativeLabelStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState(new Set());
  const [skipped] = React.useState(new Set());
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const skippedSteps = () => {
    return skipped.size;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? 
        steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <NavigationBar></NavigationBar>
      <Container fixed maxWidth={"lg"}>
        <Grid container>
          <Grid item xs={12}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item xs={12}>
            {getStepContent(activeStep)}
          </Grid>
          <Grid item container>
            <Grid>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
            </Grid>
            <Grid>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
