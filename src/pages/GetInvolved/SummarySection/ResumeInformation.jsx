import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) =>
    createStyles({
        gridBorder:{
            borderTop: "1px solid",
            borderBottom: "1px solid"
          }
    })
);

function ResumeInformation(props) {
    const {resumeInformation}=props;
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
            <Grid item xs={12} className={classes.gridBorder}>
                <Typography>Resume</Typography>
            </Grid>
            <Grid container justify={"space-between"}>
                 <Grid item xs={6}>
                <Typography>Curriculum Vitae / Resume</Typography>
            </Grid>
             <Grid item xs={6}>
                <Typography>CV.pdf</Typography>
            </Grid>
            </Grid>
            <Grid item xs={12} className={classes.gridBorder}>
                <Typography>Identification</Typography>
            </Grid>
            <Grid container justify={"space-between"}>
                 <Grid item xs={6}>
                <Typography>Identification documents</Typography>
            </Grid>
             <Grid item xs={6}>
                <Typography>ID.pdf</Typography>
            </Grid>
            </Grid>
            </Grid>
        </Grid>
    );
}

ResumeInformation.propTypes={
    resumeInformation:PropTypes.object
};

export const mapStateToProps = (state) => {
    const volunteerDetails = state.volunteerDetails;
    return {
        resumeInformation: volunteerDetails.resumeInformation
    }
};

export default connect(mapStateToProps)(ResumeInformation)
