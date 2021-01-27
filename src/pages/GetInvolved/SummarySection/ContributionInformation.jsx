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

function ContributionInformation(props) {
  const { contributionInformation } = props;
  const classes = useStyles();
  const selectedSkills = contributionInformation.specialTalent.skills.filter(skill => skill.isChecked);
  const selectedInterests = contributionInformation.interests.filter(interest => interest.isChecked);
  const selectedDays = contributionInformation.availability.filter(day => day.isChecked);

  return (
    <Grid container>
      <Grid item xs={12}>
        
        <Grid item xs={12} className={classes.gridBorder}>
          <Typography>Special talents</Typography>
        </Grid>
        <Grid container justify={"space-between"}>
          <Grid item xs={6}>
            <Typography>Skills</Typography>
          </Grid>
          <Grid item xs={6}>
            {selectedSkills.map((skill, index) => 
              <Typography key={index}>{skill.skill}</Typography>
            )}
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.gridBorder}>
          <Typography>Hobbies</Typography>
        </Grid>
        <Grid container justify={"space-between"}>
          <Grid item xs={6}>
            <Typography>
              What are your hobbies?
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{contributionInformation?.hobbies?.hobby}</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.gridBorder}>
          <Typography>Interests</Typography>
        </Grid>
        <Grid container justify={"space-between"}>
          <Grid item xs={6}>
            <Typography>
                Which programs would you like to contribute to?
            </Typography>   
          </Grid>
          <Grid item xs={6}>
          {selectedInterests.map((interest, index) => 
          <Typography key={index}>
              {interest.skill}
            </Typography>
          )}
          </Grid>
        </Grid>
        
        
        <Grid item xs={12} className={classes.gridBorder}>
          <Typography>Availability</Typography>
        </Grid>
        <Grid container justify={"space-between"}>
          <Grid item xs={6}>
            <Typography>What is your availability?</Typography>
          </Grid>
          <Grid item xs={6}>
            {selectedDays.map((day, index) =>
              <Typography key={index}>
                {day.day}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

ContributionInformation.propTypes = {
  contributionInformation: PropTypes.object,
};

export const mapStateToProps = (state) => {
  const volunteerDetails = state.volunteerDetails;
  return {
    contributionInformation: volunteerDetails.contributionInformation,
  };
};

export default connect(mapStateToProps)(ContributionInformation);
