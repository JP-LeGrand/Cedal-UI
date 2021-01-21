import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
    FormControl,
    FormGroup,
    Checkbox,
    FormLabel,
    FormControlLabel} from "@material-ui/core";
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import * as Collections from "../../../shared/Collections/Collections";
import * as Colors from "../../../shared/styles/themes/colours";

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
    checked:{
        color: `${Colors.oceangreen} !important`
    }
}));

function Availability(props) {
    const classes = useStyles();
    const [state,setState] = React.useState([]);
    const {contributionInformationRef, contributionInformation}=props;

    useEffect(() => {
        if(state.length === 0){
            setState(Collections.Days)
        }
    },[state.length]);

    const handleChange = (index) => (event) => {
        let days = [...state]
        days[index]={
            ...state[index],
            isChecked: event.target.checked
        }
        setState(days)
    };

    const validateAvailability=()=>{
        let allDaysNotChecked = state.every(day => !day.isChecked)
        return !(allDaysNotChecked)
    };

    useEffect(() => {
        contributionInformationRef({state, validateAvailability})
    },[state]);

    useEffect(() => {
        if(contributionInformation?.availability){
            setState([...state, ...contributionInformation?.availability])
        } 
    },[contributionInformation?.availability]);

    return (
        <Grid container justify={"center"}>
        <Grid item xs={12}>
            <FormControl noValidate autoComplete="off">
                <Grid item xs={12}>
                    <FormLabel component="legend">
                      Which of the following days will you be available to volunteer?
                    </FormLabel>
                    <FormGroup>
                    {state.map((day, index) => 
                    <FormControlLabel key={index}
                            control={<Checkbox 
                            checked={day.isChecked} 
                            onChange={handleChange(index)}
                            classes={{
                                    checked:classes.checked
                                }
                            }
                            />}
                            label={day.day}
                        />
                        )}
                    </FormGroup>
                    </Grid>
            </FormControl>
        </Grid>
    </Grid>
    );
}

Availability.propTypes={
    classes:PropTypes.object,
    contributionInformationRef:PropTypes.func,
    contributionInformation:PropTypes.object
};

export const mapStateToProps = (state) => {
    const contributionInformation = state.volunteerDetails.contributionInformation;
    return {
        contributionInformation: contributionInformation
    }
};

export default connect(mapStateToProps)(Availability)
