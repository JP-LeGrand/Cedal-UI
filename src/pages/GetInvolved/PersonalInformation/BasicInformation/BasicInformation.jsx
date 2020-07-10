import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormHelperText,
    TextField
} from "@material-ui/core";
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {validateFirstName, validateInput} from "../../../../shared/helpers/Validators";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        margin: theme.spacing(1)
    },
    textField: {
        maxWidth: '368px',
        width: '100%',
        paddingBottom: '15px',
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
    },
    containerCenter: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}));

function BasicInformation(props) {
    const classes = useStyles();
    const [state,setState] = React.useState({
        driversLicence: '',
        driversLicenceError: false,
        driversLicenceErrorMessage: '',
        disabilities: '',
        disabilitiesError: false,
        disabilitiesErrorMessage: '',
        disabilitiesDetails: '',
        disabilitiesDetailsError: false,
        disabilitiesDetailsErrorMessage: '',
        vehicle: '',
        vehicleError: false,
        vehicleErrorMessage: '',
    });
    const {personalInformationRef, personalInformation}=props;

    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
            [`${name}Error`]: false,
            [`${name}ErrorMessage`]: ''
        })
    };

    const validateBasicInformation=()=>{
        let driversLicence= state.driversLicence,
            disabilities=state.disabilities,
            disabilitiesDetails=state.disabilitiesDetails,
            vehicle=state.vehicle;

        let driversLicenceErrorMessage, disabilitiesDetailsErrorMessage,
            vehicleErrorMessage, disabilitiesErrorMessage;

        const driversLicenceError = !driversLicence.trim()
        const disabilitiesError = !disabilities.trim()
        const disabilitiesDetailsError= !disabilitiesDetails.trim()
        const vehicleError = !vehicle.trim();

        if(driversLicenceError){
            driversLicenceErrorMessage='Field is required'
        }else{
            driversLicenceErrorMessage=''
        }
        if(disabilitiesError){
            disabilitiesErrorMessage='Field is required'
        }else{
            disabilitiesErrorMessage=''
        }
        if(disabilitiesDetailsError){
            disabilitiesDetailsErrorMessage='Disability details is required'
        }else{
            disabilitiesDetailsErrorMessage=''
        }
        if(vehicleError){
            vehicleErrorMessage='Field is required'
        }else{
            vehicleErrorMessage=''
        }

        setState({
            driversLicenceError, driversLicenceErrorMessage,
            disabilitiesError, disabilitiesErrorMessage, disabilitiesDetailsError, disabilitiesDetailsErrorMessage,
            vehicleError, vehicleErrorMessage,
        });

        return !(driversLicenceError || disabilitiesError
            || disabilitiesDetailsError || vehicleError)
    };

    useEffect(() => {
        setState({
            ...state,
            ...personalInformation.basicInformation,
        })
    },[personalInformation.basicInformation]);

    useEffect(() => {
        personalInformationRef({state, validateBasicInformation})
    },[state]);

    return (
        <Grid container justify={"center"}>
            <Grid item xs={12}>
                <FormControl noValidate autoComplete="off">
                    <Grid item xs={12}>
                        <FormLabel component="legend">
                            Do you have a driver's licence?
                        </FormLabel>
                        <RadioGroup
                            defaultValue="driversLicence"
                            aria-label="driversLicence"
                            onChange={handleChange("driversLicence")}
                        >
                            <FormControlLabel
                                value={1}
                                control={<Radio />}
                                label="Yes"
                            />
                            <FormControlLabel
                                value={2}
                                control={<Radio/>}
                                label="No"
                            />
                        </RadioGroup>
                        <FormHelperText>{state.driversLicenceErrorMessage}</FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                        <FormLabel component="legend">Do you ownn a car?</FormLabel>
                        <RadioGroup
                            defaultValue="vehicle"
                            aria-label="vehicle"
                            onChange={handleChange("vehicle")}
                        >
                            <FormControlLabel
                                value={1}
                                control={<Radio/>}
                                label="Yes"
                            />
                            <FormControlLabel
                                value={2}
                                control={<Radio/>}
                                label="No"
                            />
                        </RadioGroup>
                        <FormHelperText>{state.disabilitiesErrorMessage}</FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                        <FormLabel component="legend">
                            Do you have any disabilities?
                        </FormLabel>
                        <RadioGroup
                            defaultValue="disabilities"
                            aria-label="disabilities"
                            onChange={handleChange("disabilities")}
                        >
                            <FormControlLabel
                                value={1}
                                control={<Radio/>}
                                label="Yes"
                            />
                            <FormControlLabel
                                value={2}
                                control={<Radio/>}
                                label="No"
                            />
                        </RadioGroup>
                        <FormHelperText>{state.disabilitiesDetailsErrorMessage}</FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                        <FormLabel component="legend">Disability Details</FormLabel>
                        <TextField
                            className={classes.textField}
                            error={state.disabilitiesDetailsError}
                            rowsMin={3}
                            onChange={handleChange("disabilitiesDetails")}
                            helperText={state.disabilitiesDetailsErrorMessage}
                        />
                    </Grid>
                </FormControl>
            </Grid>
        </Grid>
    );
}
BasicInformation.propTypes={
    classes:PropTypes.object,
    personalInformationRef:PropTypes.func,
    personalInformation:PropTypes.object,
};

export const mapStateToProps = (state) => {
    const personalInformation = state.volunteerDetails.personalInformation;
    return {
        personalInformation: personalInformation
    }
};

export default connect(mapStateToProps)(BasicInformation)
