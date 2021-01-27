import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField} from "@material-ui/core";
import PropTypes from "prop-types";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import moment from 'moment';
import MomentUtils from "@date-io/moment";
import {connect} from 'react-redux';
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
    }
}));

function BiographicalInformation(props) {
    const classes = useStyles();
    const [state,setState] = React.useState({
        firstName: '',
        firstNameError: false,
        firstNameErrorMessage: '',
        lastName: '',
        lastNameError: false,
        lastNameErrorMessage: '',
        dateOfBirth: null,
        dateOfBirthError: false,
        dateOfBirthErrorMessage: '',
        contactNumber: '',
        contactNumberError: false,
        contactNumberErrorMessage: '',
        emailAddress: '',
        emailAddressError: false,
        emailAddressErrorMessage: '',
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

    const handleDateChange = (date, name) => {
        setState({
            ...state,
            [name]: date ? moment(date).format("MM/DD/YYYY") : null,
            [`${name}Error`]: false,
            [`${name}ErrorMessage`]: ''
        })
    };

    const validateBiographicalInformation=()=>{
        let firstName= state.firstName,
            lastName= state.lastName,
            dateOfBirth=state.dateOfBirth,
            contactNumber=state.contactNumber,
            emailAddress=state.emailAddress;

        let firstNameErrorMessage, lastNameErrorMessage,
            dateOfBirthErrorMessage, contactNumberErrorMessage,
            emailAddressErrorMessage;

        const firstNameError = !validateFirstName(firstName??'');
        const lastNameError = !validateFirstName(lastName??'');
        const dateOfBirthError= !state.dateOfBirth;
        const contactNumberError = !validateInput(contactNumber??'');
        const emailAddressError = !validateInput(emailAddress??'');

        if(firstNameError){
            firstNameErrorMessage='First name is required'
        }else{
            firstNameErrorMessage=''
        }
        if(lastNameError){
            lastNameErrorMessage='Last name is required'
        }else{
            lastNameErrorMessage=''
        }
        if(dateOfBirthError){
            dateOfBirthErrorMessage='Date of birth is required'
        }else{
            dateOfBirthErrorMessage=''
        }
        if(contactNumberError){
            contactNumberErrorMessage='Contact number is required'
        }else{
            contactNumberErrorMessage=''
        }
        if(emailAddressError){
            emailAddressErrorMessage='Email address is required'
        }else{
            emailAddressErrorMessage=''
        }

        setState({
            emailAddressError, emailAddressErrorMessage,
            contactNumberError, contactNumberErrorMessage, lastNameError, lastNameErrorMessage,
            firstNameError, firstNameErrorMessage,
            dateOfBirthError, dateOfBirthErrorMessage, firstName, lastName, dateOfBirth,
            contactNumber, emailAddress,
        });

        return !(firstNameError || lastNameError
            || contactNumberError || emailAddressError || dateOfBirthError)
    };

    // React's useEffect hook combines componentDidMount , componentDidUpdate and componentWillUnmount lifecycle methods.
    useEffect(() => {
        if(personalInformation?.biographicalInformation){
              setState({
            ...state,
            ...personalInformation.biographicalInformation,
        })
        }
    },[personalInformation?.biographicalInformation]);

    useEffect(() => {
        personalInformationRef({state, validateBiographicalInformation})
    },[state]); // Call this hook whenever state is changed

    return (
        <Grid container justify="center" spacing={1}>
            <Grid item xs={12}>
                <Grid item xs={12}>
                    <TextField
                        id="firstName"
                        className={classes.textField}
                        label={'First Name'}
                        value={state.firstName??''}
                        error={state.firstNameError}
                        onChange={handleChange('firstName')}
                        helperText={state.firstNameErrorMessage}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="lastName"
                        className={classes.textField}
                        label={'Last Name'}
                        value={state.lastName??''}
                        error={state.lastNameError}
                        onChange={handleChange('lastName')}
                        helperText={state.lastNameErrorMessage}/>
                </Grid>
                <Grid item xs={12}>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <KeyboardDatePicker
                            id={'dateOfBirth'}
                            clearable
                            margin="normal"
                            autoOk
                            value={state.dateOfBirth??null}
                            label="Date of birth"
                            placeholder={"DD/MM/YYYY"}
                            openTo='year'
                            className={classes.textField}
                            disableFuture={true}
                            format={"DD/MM/YYYY"}
                            invalidDateMessage={"Please enter a valid date (dd/mm/yyyy)"}
                            invalidLabel=""
                            maskChar=" "
                            onChange={(date)=>handleDateChange(date,'dateOfBirth')}
                            error={state.dateOfBirthError}
                            helperText={state.dateOfBirthErrorMessage}
                            InputProps={{
                                error: state.dateOfBirthError,
                                helperText: state.dateOfBirthErrorMessage,
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="contactNumber"
                        className={classes.textField}
                        label={'Contact Number'}
                    value={state.contactNumber??''}
                    error={state.contactNumberError}
                        onChange={handleChange('contactNumber')}
                    helperText={state.contactNumberErrorMessage}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="emailAddress"
                        type="email"
                        className={classes.textField}
                        label ={'Email Address'}
                        value={state.emailAddress??''}
                        error={state.emailAddressError}
                        onChange={handleChange('emailAddress')}
                        helperText={state.emailAddressErrorMessage}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

BiographicalInformation.propTypes={
    classes:PropTypes.object,
    personalInformation:PropTypes.object,
    personalInformationRef:PropTypes.func
};

const mapStateToProps = (state) => {
    const personalInformation = state.volunteerDetails.personalInformation;
    return {
        personalInformation: personalInformation
    }
};

export default connect(mapStateToProps)(BiographicalInformation)
