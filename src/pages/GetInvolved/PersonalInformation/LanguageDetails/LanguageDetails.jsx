import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import {
    FormControl,
    FormControlLabel,
    Checkbox,
    FormGroup
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        margin: theme.spacing(1)
    },
    formControl: {
        margin: theme.spacing(3)
    }
}));

function LanguageDetails() {
    const [state, setState] = React.useState({
        English: true,
        Afrikaans: true,
        Zulu: true,
        Xhosa: true,
        Sotho: true,
        Tswana: true,
        Venda: true,
        Tsonga: true,
        Swati: true,
        Ndebele: true
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked})
    };

    const {
        English,
        Afrikaans,
        Zulu,
        Xhosa,
        Sotho,
        Tswana,
        Venda,
        Tsonga,
        Swati,
        Ndebele
    } = state;

    const classes = useStyles();
    return (
            <Grid container justify="center" spacing={1}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Afrikaans}
                                    onChange={handleChange}
                                    value="Afrikaans"
                                />
                            }
                            label="Afrikaans"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={English}
                                    onChange={handleChange}
                                    value="English"
                                />
                            }
                            label="English"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Ndebele}
                                    onChange={handleChange}
                                    value="Ndebele"
                                />
                            }
                            label="Ndebele"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Sotho}
                                    onChange={handleChange}
                                    value="Sotho"
                                />
                            }
                            label="Sotho"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Swati}
                                    onChange={handleChange}
                                    value="Swati"
                                />
                            }
                            label="Swati"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Tsonga}
                                    onChange={handleChange}
                                    value="Tsonga"
                                />
                            }
                            label="Tsonga"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Tswana}
                                    onChange={handleChange}
                                    value="Tswana"
                                />
                            }
                            label="Tswana"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Venda}
                                    onChange={handleChange}
                                    value="Venda"
                                />
                            }
                            label="Venda"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Xhosa}
                                    onChange={handleChange}
                                    value="Xhosa"
                                />
                            }
                            label="Xhosa"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Zulu}
                                    onChange={handleChange}
                                    value="Zulu"
                                />
                            }
                            label="Zulu"
                        />
                    </FormGroup>
                </FormControl>
            </Grid>
    );
}

export default LanguageDetails
