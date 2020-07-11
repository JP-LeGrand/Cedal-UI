import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        margin: theme.spacing(1)
    },
    textField: {
        maxWidth: '368px',
        width: '100%',
        paddingBottom: '15px',
    }
}));

function HobbiesComponent(props) {
    const classes = useStyles();
    const [state,setState] = React.useState({
        description:"",
        descriptionError:false,
        descriptionErrorMessage:"",
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

    const validateHobbies=()=>{
        let description=state.description

        let descriptionError= !description?.trim()
        let descriptionErrorMessage

        if(description){
            descriptionErrorMessage= "Description is required"
        }
        else{
            descriptionErrorMessage=""
        }

        setState({
            description, descriptionError, descriptionErrorMessage
        })

        return !descriptionError
    }

    useEffect(() => {
        setState({
            ...state,
            ...personalInformation.description,
        })
    },[personalInformation.description]);

    useEffect(() => {
        personalInformationRef({state, validateHobbies})
    },[state]);

    return (
            <Grid container alignItems="center" spacing={1}>
                    <Grid item xs={12}>
                        <TextField
                            className={classes.textField}
                            aria-label="minimum height"
                            rowsMax={3}
                            multiline
                            label={"Tell us something about yourself"}
                            value={state.description ?? ""}
                            onChange={handleChange("description")}
                            helperText={state.descriptionErrorMessage}
                            error={state.descriptionError}
                        />
                    </Grid>
            </Grid>
    );
}

HobbiesComponent.propTypes={
    classes:PropTypes.object,
    personalInformationRef:PropTypes.func,
    personalInformation:PropTypes.object,
};

const mapStateToProps = (state) => {
    const personalInformation = state.volunteerDetails.personalInformation;
    return {
        personalInformation: personalInformation
    }
};

export default connect(mapStateToProps)(HobbiesComponent)
