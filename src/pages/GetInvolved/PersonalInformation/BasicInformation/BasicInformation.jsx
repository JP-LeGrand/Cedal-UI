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
import clsx from 'clsx';

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
    rootRadio: {
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    containerCenter: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    error:{
        color:theme.colors.alizarinCrimson
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: theme.colors.oceanGreen,
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: theme.colors.oceanGreen,
        },
    },
}));

function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.rootRadio}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

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

        const driversLicenceError = !driversLicence?.trim()
        const disabilitiesError = !disabilities?.trim()
        const vehicleError = !vehicle?.trim();
        let disabilitiesDetailsError

        if(state.disabilities?.toLocaleLowerCase()==="yes"){
             disabilitiesDetailsError = !disabilitiesDetails?.trim()
            if(disabilitiesDetailsError){
                disabilitiesDetailsErrorMessage='Disability details is required'
            }else{
                disabilitiesDetailsErrorMessage=''
            }
        }

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
        if(vehicleError){
            vehicleErrorMessage='Field is required'
        }else{
            vehicleErrorMessage=''
        }

        setState({
            driversLicenceError, driversLicenceErrorMessage,
            disabilitiesError, disabilitiesErrorMessage, disabilitiesDetailsError, disabilitiesDetailsErrorMessage,
            vehicleError, vehicleErrorMessage,driversLicence, disabilities, disabilitiesDetails, vehicle
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
                        <FormLabel component="legend" className={state.driversLicenceError?classes.error:''}>
                            Do you have a driver's licence?
                        </FormLabel>
                        <RadioGroup
                            value={state.driversLicence ?? ""}
                            aria-label="driversLicence"
                            onChange={handleChange("driversLicence")}
                        >
                            <FormControlLabel
                                value={"Yes"}
                                control={<StyledRadio />}
                                label="Yes"
                            />
                            <FormControlLabel
                                value={"No"}
                                control={<StyledRadio/>}
                                label="No"
                            />
                        </RadioGroup>
                        <FormHelperText className={classes.error}>{state.driversLicenceErrorMessage}</FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                        <FormLabel component="legend" className={state.vehicleError?classes.error:''}>Do you own a car?</FormLabel>
                        <RadioGroup
                            value={state.vehicle ?? ""}
                            aria-label="vehicle"
                            onChange={handleChange("vehicle")}
                        >
                            <FormControlLabel
                                value={"Yes"}
                                control={<StyledRadio/>}
                                label="Yes"
                            />
                            <FormControlLabel
                                value={"No"}
                                control={<StyledRadio/>}
                                label="No"
                            />
                        </RadioGroup>
                        <FormHelperText className={classes.error}>{state.vehicleErrorMessage}</FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                        <FormLabel component="legend" className={state.disabilitiesError?classes.error:''}>
                            Do you have any disabilities?
                        </FormLabel>
                        <RadioGroup
                            value={state.disabilities ?? ""}
                            aria-label="disabilities"
                            onChange={handleChange("disabilities")}
                        >
                            <FormControlLabel
                                value={"Yes"}
                                control={<StyledRadio/>}
                                label="Yes"
                            />
                            <FormControlLabel
                                value={"No"}
                                control={<StyledRadio/>}
                                label="No"
                            />
                        </RadioGroup>
                        <FormHelperText className={classes.error}>{state.disabilitiesErrorMessage}</FormHelperText>
                    </Grid>
                </FormControl>
                {state.disabilities?.toLocaleLowerCase()==="yes" &&
                <Grid item xs={12}>
                    <Grid item xs={12}>
                        <TextField
                            label={"Disability Details"}
                            className={classes.textField}
                            error={state.disabilitiesDetailsError}
                            rowsMin={3}
                            onChange={handleChange("disabilitiesDetails")}
                            helperText={state.disabilitiesDetailsErrorMessage}
                            value={state.disabilitiesDetails ?? ""}
                            rowsMax={3}
                            multiline
                        />
                    </Grid>
                </Grid>
                }
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
