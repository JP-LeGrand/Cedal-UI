import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { FormControl, TextareaAutosize } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        margin: theme.spacing(1)
    },
    textField: {
        width: "100%"
    }
}));

function HobbiesComponent() {
    const classes = useStyles();
    return (
            <Grid container alignItems="center" spacing={1}>
                <FormControl noValidate autoComplete="off">
                    <Grid item xs={12}>
                        <TextareaAutosize
                            className={classes.textField}
                            aria-label="minimum height"
                            rowsMin={3}
                        />
                    </Grid>
                </FormControl>
            </Grid>
    );
}

export default HobbiesComponent
