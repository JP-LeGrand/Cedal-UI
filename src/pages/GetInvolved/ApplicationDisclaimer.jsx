import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        padding:'0 15px'
    },
    highlight: {
        fontWeight: "bold"
    }
}));

export default function ApplicationDisclaimer() {
    const classes = useStyles();

    return (
                <Grid container className={classes.root}>
                    <Grid item xs={12}>
                        <Typography>Dear Potential Volunteer,</Typography>
                        <Typography>
                            Thank you for giving us your time to volunteer. We are always
                            looking forward to welcoming new volunteers to our CEDAL
                            community!
                        </Typography>
                        <Typography>
                            Volunteers help us to take care of and make our neighborhoods a
                            better place, and since its inception, our volunteers have been
                            the cornerstone and lifeblood of our organization. The trained
                            volunteers are the foot soldiers in the fight for education and
                            carry out important work in areas of need. Without our volunteers,
                            CEDAL would not be able to provide quality care and support to
                            those in need of education.
                        </Typography>
                        <Typography>
                            To help us identify where your knowledge and skills can best be
                            used, please complete the online form. When your application has
                            been submitted and processed, we can be in contact with you and
                            let you know when the next appropriate volunteer training course
                            will take place. Thank you for your time and commitment in
                            advance.
                        </Typography>
                        <Grid item>
                            <Typography className={classes.highlight}>Please Note:</Typography>
                            <ul>
                                <li>
                                    Volunteers are <span> not paid</span>
                                </li>
                                <li>
                                    Volunteers receive training specific to the field in which
                                    they wish to participate.
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/ApplicationForm"
                        >
                            Volunteer
                        </Button>
                    </Grid>
                </Grid>
    );
}
