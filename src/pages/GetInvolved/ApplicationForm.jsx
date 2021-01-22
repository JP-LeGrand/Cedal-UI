import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import ContributionInformation from "./ContributionInformation/ContributionInformation";
import ResumeInformation from "./ResumeSection/ResumeInformation";
import Grid from "@material-ui/core/Grid";
import NavigationBar from "../../shared/components/navigation-bar/navigationBar";
import { Stepper, Step, StepLabel, Container } from "@material-ui/core";

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


export default function HorizontalNonLinearAlternativeLabelStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [personalInformationRef, setPersonalInformationRef] = useState();
    const [contributionInformationRef, setContributionInformationRef] = useState();
    const [resumeInformationRef, setResumeInformationRef] = useState();
    const [completed] = React.useState(new Set());
    const [skipped] = React.useState(new Set());

    const getSteps =()=> {
        return ["Personal Information", "Contribution Details", "Screening", "Summary"];
    }
    
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <PersonalInformation nextSectionCallBackRef={setPersonalInformationRef}/>;
            case 1:
                return <ContributionInformation nextSectionCallBackRef={setContributionInformationRef}/>;
            case 2:
                return <ResumeInformation nextSectionCallBackRef={setContributionInformationRef}/>;
            case 3:
                return null;
            default:
                return null;
        }
    };

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

    const validateSection = () => {
        if(activeStep === 0 && personalInformationRef.validateAddressDetails()){
            handleNext()
        }
        if(activeStep === 1 && contributionInformationRef.validateAvailability()){
            handleNext()
        }
        if(activeStep === 2 && resumeInformationRef.validateIdentification()){
            handleNext()
        }
    }

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const disableNextButton = () => {
        if (activeStep === 0 && personalInformationRef?.activeStep !== 2){
                return true
        }
        if (activeStep === 1 && contributionInformationRef?.activeStep !== 3){
            return true
        }
        if (activeStep === 2 && resumeInformationRef?.activeStep !== 1){
            return true
        }
        return false
    }

    return (
        <div className={classes.root}>
            <NavigationBar/>
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
                            <Button 
                                disabled ={disableNextButton()}
                                variant="contained" 
                                color="primary" 
                                onClick={validateSection}>
                                {activeStep === steps.length - 1 ? "Submit" : "Next"}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
