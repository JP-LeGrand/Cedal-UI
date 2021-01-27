import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import * as Collections from "../../../shared/Collections/Collections";
import * as Colors from "../../../shared/styles/themes/colours";
import DropZone from "../../../shared/components/navigation-bar/dropZone"

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

function Identification(props) {
    const classes = useStyles();
    const [state, setState] = React.useState();
    const {resumeInformationRef, resumeInformation}=props;

    const validateIdentification=()=>{
        let validDropZone = state.validateDropZone()
        return !(validDropZone)
    };

    useEffect(() => {
        resumeInformationRef({state, validateIdentification})
    },[state]);

    return (
        <Grid container>
        <Grid>
            <Typography>
                Please upload any form of identification e.g. ID, Passport, Driver's licence
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <DropZone 
            fileRef={setState} 
            fileUploadSection={"identification"}/>
        </Grid>
    </Grid>
    );
}

Identification.propTypes={
    classes:PropTypes.object,
    resumeInformationRef:PropTypes.func,
    resumeInformation:PropTypes.object
};

export const mapStateToProps = (state) => {
    const resumeInformation = state.volunteerDetails.resumeInformation;
    return {
        resumeInformation: resumeInformation
    }
};

export default connect(mapStateToProps)(Identification)
