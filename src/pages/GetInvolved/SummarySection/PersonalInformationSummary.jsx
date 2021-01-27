import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) =>
  createStyles({
  gridBorder:{
    borderTop: "1px solid",
    borderBottom: "1px solid"
  }
  })
);

function PersonalInformation(props) {
  const { personalInformation } = props;
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid item xs={12} className={classes.gridBorder}>
          <Typography>Biographical Information</Typography>
        </Grid>
        <Grid container justify={"space-between"}>
          <Grid item xs={6}>
            <Typography>First name</Typography>
            <Typography>Last name</Typography>
            <Typography>Date of birth</Typography>
            <Typography>Contact number</Typography>
            <Typography>Email address</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {personalInformation?.biographicalInformation?.firstName}
            </Typography>
            <Typography>
              {personalInformation?.biographicalInformation?.lastName}
            </Typography>
            <Typography>
              {personalInformation?.biographicalInformation?.dateOfBirth}
            </Typography>
            <Typography>
              {personalInformation?.biographicalInformation?.contactNumber}
            </Typography>
            <Typography>
              {personalInformation?.biographicalInformation?.emailAddress}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.gridBorder}>
          <Typography>Basic Information</Typography>
        </Grid>
        <Grid container justify={"space-between"}>
          <Grid item xs={6}>
            <Typography>Do you have a driver's licence?</Typography>
            <Typography>Do you own a car?</Typography>
            <Typography>Do you have any disabilities</Typography>
            {personalInformation?.basicInformation?.disabilities === "Yes" ? (
              <Typography>Disability details</Typography>
            ) : null}
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {personalInformation?.basicInformation?.driversLicence}
            </Typography>
            <Typography>
              {personalInformation?.basicInformation?.vehicle}
            </Typography>
            <Typography>
              {personalInformation?.basicInformation?.disabilities}
            </Typography>
            {personalInformation?.basicInformation?.disabilities === "Yes" ? (
              <Typography>
                {personalInformation?.basicInformation?.disabilitiesDetails}
              </Typography>
            ) : null}
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.gridBorder}>
          <Typography>Address Details</Typography>
        </Grid>
        <Grid container justify={"space-between"}>
          <Grid item xs={6}>
            <Typography>Street name</Typography>
            <Typography>City</Typography>
            <Typography>Postal code</Typography>
            <Typography>Province</Typography>
            <Typography>Country</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {personalInformation?.addressDetails?.streetName}
            </Typography>
            <Typography>{personalInformation?.addressDetails?.city}</Typography>
            <Typography>
              {personalInformation?.addressDetails?.postalCode}
            </Typography>
            <Typography>
              {personalInformation?.addressDetails?.province}
            </Typography>
            <Typography>
              {personalInformation?.addressDetails?.country}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

PersonalInformation.propTypes = {
  personalInformation: PropTypes.object,
};

export const mapStateToProps = (state) => {
  const volunteerDetails = state.volunteerDetails;
  return {
    personalInformation: volunteerDetails.personalInformation,
  };
};

export default connect(mapStateToProps)(PersonalInformation);
