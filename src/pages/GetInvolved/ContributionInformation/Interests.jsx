import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel,
    Checkbox
} from "@material-ui/core";
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
    }
));


function Interests(props) {
    const classes = useStyles();
    const [state, setState] = React.useState([]);
 
    const {contributionInformationRef, contributionInformation}=props;
    
    useEffect(() => {
        if(state.length === 0){
            setState(Collections.Focus)
        } 
    },[state.length]);

    const handleChange = (index) => (event) => {
        let skills = [...state]
        skills[index]={
            ...state[index],
            isChecked: event.target.checked
        }
        setState(skills)
    };

    const validateInterests=()=>{

        let allFocusNotChecked = state.every(focus => !focus.isChecked)
        return !(allFocusNotChecked)
    };

    useEffect(() => {
        if(contributionInformation?.interests){
            setState([...state, ...contributionInformation.interests])
        } 
    },[contributionInformation.interests]);

     useEffect(() => {
         contributionInformationRef({state, validateInterests})
     },[state]);

    return (
        <Grid container justify={"center"}>
            <Grid item xs={12}>
                <FormControl noValidate autoComplete="off">
                    <Grid item xs={12}>
                        <FormLabel component="legend">
                          Which programs would you like to contribute to? 
                        </FormLabel>
                        <FormGroup>
                        {state.map((skill, index) => 
                        <FormControlLabel key={index}
                                control={<Checkbox 
                                checked={skill.isChecked} 
                                onChange={handleChange(index)}
                                classes={{
                                        checked:classes.checked
                                    }
                                }
                                />}
                                label={skill.skill}
                            />
                            )}
                        </FormGroup>
                        </Grid>
                </FormControl>
            </Grid>
        </Grid>
    );
}
Interests.propTypes={
    classes:PropTypes.object,
    contributionInformationRef:PropTypes.func,
    contributionInformation:PropTypes.object,
};

export const mapStateToProps = (state) => {
    const contributionInformation = state.volunteerDetails.contributionInformation;
    return {
        contributionInformation: contributionInformation
    }
};

export default connect(mapStateToProps)(Interests)
