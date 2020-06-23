import React from "react";
import AddressDetails from "./AddressDetails/AddressDetails";
import BiographicalInformation from "./BiographicalInformation/BiographicalInformation";
import LanguageDetails from "./LanguageDetails/LanguageDetails";
import Hobbies from "./Hobbies/Hobbies";
import BasicInformation from "./BasicInformation/BasicInformation";
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
        "Biographical Information",
        "Basic Information",
        "Languages Spoken",
        "Address Details",
        "Hobbies"
    ];
}

function PersonalInformation(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [state, setState] = React.useState({
        biographicalInformationChildRef:{}
    });
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
                return biographicalInformationFunc();
            case 1:
                return true;
            case 2:
                return true;
            case 3:
                return true;
            case 4:
                return true;
            default:
                return false
        }
    }

    function biographicalInformationFunc(){
        const {personalInformation,savePersonalInformation} = props;
        const { biographicalInformationChildRef } = state;

        let sectionIsValid = biographicalInformationChildRef?.validateBiographicalInformation();
        if(sectionIsValid){
            let biographicalState=biographicalInformationChildRef.state;
            PersonalInformation.biographicalInformation={
                name:biographicalState.firstName,
                lastName:biographicalState.lastName,
                idNumber:biographicalState.identityNumber,
                dateOfBirth:biographicalState.dateOfBirth,
                contactNumber:biographicalState.contactNumber,
                emailAddress:biographicalState.emailAddress,
                maritalStatus:biographicalState.maritalStatus
            };
            handleNext();
            savePersonalInformation(personalInformation)
        }
    }

    const navigateToNextSection = () => {
        const totalSections = totalSteps - 1;
        if (activeStep < totalSections) {
            isSectionValid(activeStep)
        }
    };

    const biographicalInformationCallBack = (childData) => {
        setState({ biographicalInformationChildRef: childData })
    };

    const getStepContent=(index)=> {
        switch (index) {
            case 0:
                return <BiographicalInformation personalInformationRef={biographicalInformationCallBack}/>;
            case 1:
                return <BasicInformation />;
            case 2:
                return <LanguageDetails />;
            case 3:
                return <AddressDetails />;
            case 4:
                return <Hobbies />;
            default:
                return "Unknown step";
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

PersonalInformation.propTypes={
    personalInformation:PropTypes.object,
    savePersonalInformation:PropTypes.func
};

export const mapStateToProps = (state) => {
    const personalInformation = state.volunteerDetails.personalInformation;
    return {
        personalInformation: personalInformation
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        savePersonalInformation: bindActionCreators(VolunteerActions.SavePersonalInformation, dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PersonalInformation)
