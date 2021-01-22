import React from "react";
import Resume from "./Resume";
import Identification from "./Identification";
import {Grid} from "@material-ui/core";
import {bindActionCreators} from "redux";
import * as VolunteerActions from "../VolunteerActions";
import {connect} from "react-redux";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: "100%"
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1)
        },
        actionsContainer: {
            marginBottom: theme.spacing(2)
        },
        resetContainer: {
            padding: theme.spacing(3)
        }
    })
);

function getSteps() {
    return [
        "Resume",
        "Identification",
    ];
}

function ResumeInformation(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [resumeChildRef, setResumeChildRef] = React.useState({});
    const [identificationChildRef, setIdentificationChildRef] = React.useState({});
    const steps = getSteps();
    const totalSteps=getSteps().length;

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    function isSectionValid (section)  {
        switch (section) {
            case 0:
                return validateResume();
            case 1:
                return validateIdentification();
            default:
                return false
        }
    }

    function validateResume(){
        const {resumeInformation, saveResumeInformation} = props;

        let sectionIsValid = resumeChildRef.validateResume() ?? false;
        if(sectionIsValid){
            let resumeState = resumeChildRef.state;
            resumeInformation.resume= resumeState;
            saveResumeInformation(resumeInformation)
            handleNext();
        }
    }

    function validateIdentification(){
        const {resumeInformation, saveResumeInformation} = props;

        let sectionIsValid = identificationChildRef?.validateIdentification() ?? false;
        if(sectionIsValid){
            let identificationState=identificationChildRef.state;
            ResumeInformation.identification= identificationState;
            saveResumeInformation(resumeInformation)
            handleNext();
        }
        return sectionIsValid
    }

    const navigateToNextSection = () => {
        const totalSections = totalSteps - 1;
        if (activeStep < totalSections) {
            isSectionValid(activeStep)
        }
    };

    const getStepContent=(index)=> {
        switch (index) {
            case 0:
                return <Resume resumeInformationRef={setResumeChildRef}/>;
            case 1:
                return <Identification resumeInformationRef={setIdentificationChildRef}/>;
            default:
                return null;
        }
    };

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

ResumeInformation.propTypes={
    resumeInformation:PropTypes.object,
    saveResumeInformation:PropTypes.func,
    nextSectionCallBackRef: PropTypes.func
};

export const mapStateToProps = (state) => {
    const resumeInformation = state.volunteerDetails.resumeInformation;
    return {
        resumeInformation: resumeInformation
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        saveResumeInformation: bindActionCreators(VolunteerActions.SaveResumeInformation, dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ResumeInformation)
