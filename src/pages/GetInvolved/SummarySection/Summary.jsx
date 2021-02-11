import React from "react";
import { Grid, Typography } from "@material-ui/core";
import PersonalInformation from "./PersonalInformationSummary";
import ContributionInformation from "./ContributionInformation";
import ResumeInformation from "./ResumeInformation";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    sectionHeader: {
      backgroundColor: theme.colors.oceanGreen,
    },
    sectionHeading: {
      ...theme.typography.h4BoldWhite,
      textAlign: "left",
    },
  })
);

export default function Summary() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid item xs={12} className={classes.sectionHeader}>
          <Typography className={classes.sectionHeading}>
            Personal Information
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <PersonalInformation />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid item xs={12} className={classes.sectionHeader}>
          <Typography className={classes.sectionHeading}>
            Contribution Information
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ContributionInformation />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid item xs={12} className={classes.sectionHeader}>
          <Typography className={classes.sectionHeading}>
            Screening Information
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ResumeInformation />
        </Grid>
      </Grid>
    </Grid>
  );
}
