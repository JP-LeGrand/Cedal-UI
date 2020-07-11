import React from "react";
import AddressDetails from "./AddressDetails/AddressDetails";
import BiographicalInformation from "./BiographicalInformation/BiographicalInformation";
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
        "Address Details",
        "Hobbies"
    ];
}

function PersonalInformation(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [biographicalInformationChildRef, setBiographicalInformationChildRef] = React.useState({});
    const [basicInformationChildRef, setBasicInformationChildRef] = React.useState({});
    const [addressDetailsChildRef, setAddressDetailsChildRef] = React.useState({});
    const [hobbiesChildRef, setHobbiesChildRef] = React.useState({});
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
                return validateBiographicalInformation();
            case 1:
                return validateBasicInformation();
            case 2:
                return validateAddressDetails();
            case 3:
                return validateHobbies();
            default:
                return false
        }
    }

    function validateBiographicalInformation(){
        const {personalInformation, savePersonalInformation} = props;

        let sectionIsValid = biographicalInformationChildRef?.validateBiographicalInformation() ?? false;
        if(sectionIsValid){
            let biographicalState=biographicalInformationChildRef.state;
            personalInformation.biographicalInformation={
                firstName:biographicalState.firstName,
                lastName:biographicalState.lastName,
                dateOfBirth:biographicalState.dateOfBirth,
                contactNumber:biographicalState.contactNumber,
                emailAddress:biographicalState.emailAddress,
            };
            savePersonalInformation(personalInformation)
            handleNext();
        }
        return sectionIsValid
    }

    function validateBasicInformation(){
        const {personalInformation, savePersonalInformation} = props;

        let sectionIsValid = basicInformationChildRef?.validateBasicInformation() ?? false;
        if(sectionIsValid){
            let basicState=basicInformationChildRef.state;
            personalInformation.basicInformation={
                driversLicence: basicState.driversLicence,
                disabilities: basicState.disabilities,
                disabilitiesDetails: basicState.disabilitiesDetails,
                vehicle: basicState.vehicle,
            };
            savePersonalInformation(personalInformation)
            handleNext();
        }
        return sectionIsValid
    }

    function validateAddressDetails(){
        const {personalInformation, savePersonalInformation} = props;

        let sectionIsValid = addressDetailsChildRef?.validateAddressDetails() ?? false;
        if(sectionIsValid){
            let addressDetailsState=addressDetailsChildRef.state;
            personalInformation.addressDetails={
                streetName: addressDetailsState.streetName,
                city:addressDetailsState.city,
                postalCode:addressDetailsState.postalCode,
                province:addressDetailsState.province,
                country:addressDetailsState.country
            };
            savePersonalInformation(personalInformation)
            handleNext();
        }
        return sectionIsValid
    }

    function validateHobbies(){
        const {personalInformation, savePersonalInformation} = props;

        let sectionIsValid = hobbiesChildRef?.validateHobbies() ?? false;
        if(sectionIsValid){
            let hobbiesState=hobbiesChildRef.state;
            personalInformation.description=hobbiesState.description;
            savePersonalInformation(personalInformation)
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
                return <BiographicalInformation personalInformationRef={setBiographicalInformationChildRef}/>;
            case 1:
                return <BasicInformation personalInformationRef={setBasicInformationChildRef}/>;
            case 2:
                return <AddressDetails personalInformationRef={setAddressDetailsChildRef}/>;
            case 3:
                return <Hobbies personalInformationRef={setHobbiesChildRef}/>;
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
