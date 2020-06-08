import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    container: theme.containers.containerFlexStart,
    root: {
        width: "100%"
    },
    textField: {
        maxWidth: '368px',
        width: '100%',
        paddingBottom: '15px',
    }
}));

function AddressDetails() {
    const classes = useStyles();
    return (
        <Grid container justify={"center"} className={classes.root}>
                    <Grid item xs={12}>
                        <TextField
                            id="steetName"
                            label="Street Name"
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="city" label="City" className={classes.textField} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="postalCode"
                            label="Postal Code"
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="province"
                            label="Province"
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="country"
                            label="Country"
                            className={classes.textField}
                        />
                    </Grid>
        </Grid>
    );
}


export default AddressDetails
