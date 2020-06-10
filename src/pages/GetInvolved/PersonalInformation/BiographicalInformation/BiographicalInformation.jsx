import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
    Grid,
    TextField
} from "@material-ui/core";
import PropTypes from "prop-types";

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
    }
}));

function BiographicalInformation() {
    const classes = useStyles()
    const [state] = React.useState({
        firstName: '',
        firstNameError: false,
        firstNameErrorMessage: '',
        lastName: '',
        lastNameError: false,
        lastNameErrorMessage: '',
        identityNumber: '',
        identityNumberError: false,
        identityNumberErrorMessage: '',
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

    return (
        <Grid container justify="center" spacing={1}>
            <Grid item xs={12}>
                <Grid item xs={12}>
                    <TextField
                        id="firstName"
                        className={classes.textField}
                        label={'First Name'}
                        value={state.firstName}
                        error={state.firstNameError}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="lastName"
                        className={classes.textField}
                        label={'Last Name'}
                        value={state.lastName}
                        error={state.lastNameError}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="contactNumber"
                        className={classes.textField}
                        label={'Contact Number'}
                        value={state.contactNumber}
                        error={state.contactNumberError}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="contactNumber"
                        className={classes.textField}
                        label={'Contact Number'}
                    value={state.contactNumber}
                    error={state.contactNumberError}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="emailAddress"
                        type="email"
                        className={classes.textField}
                        label ={'Email Address'}
                        value={state.emailAddress}
                        error={state.emailAddressError}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="identityNumber"
                               className={classes.textField}
                               label={'Identity Number'}
                    value={state.identityNumber}
                    error={state.identityNumberError}/>
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">Marital Status</FormLabel>
                    <RadioGroup
                        defaultValue="Marital Status"
                        aria-label="Marital Status"
                        name="customized-radios"
                    >
                        <FormControlLabel
                            value="1"
                            control={<StyledRadio />}
                            label="Single"
                        />
                        <FormControlLabel
                            value="2"
                            control={<StyledRadio />}
                            label="Married"
                        />
                        <FormControlLabel
                            value="3"
                            control={<StyledRadio />}
                            label="Divorced"
                        />
                    </RadioGroup>
                </Grid>
            </Grid>
        </Grid>
    );
}

function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.rootRadio}
            disableRipple
            color="default"
            checkedIcon={<span className={(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    )
}

BiographicalInformation.propTypes={
    classes:PropTypes.object
}

export default BiographicalInformation
