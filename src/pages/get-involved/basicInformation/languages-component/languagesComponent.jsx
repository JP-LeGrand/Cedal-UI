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

function LanguagesComponent() {
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

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
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
    <div className={classes.root}>
      <Grid container alignItems="center" spacing={1}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Afrikaans}
                  onChange={handleChange("Afrikaans")}
                  value="Afrikaans"
                />
              }
              label="Afrikaans"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={English}
                  onChange={handleChange("English")}
                  value="English"
                />
              }
              label="English"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Ndebele}
                  onChange={handleChange("Ndebele")}
                  value="Ndebele"
                />
              }
              label="Ndebele"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Sotho}
                  onChange={handleChange("Sotho")}
                  value="Sotho"
                />
              }
              label="Sotho"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Swati}
                  onChange={handleChange("Swati")}
                  value="Swati"
                />
              }
              label="Swati"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Tsonga}
                  onChange={handleChange("Tsonga")}
                  value="Tsonga"
                />
              }
              label="Tsonga"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Tswana}
                  onChange={handleChange("Tswana")}
                  value="Tswana"
                />
              }
              label="Tswana"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Venda}
                  onChange={handleChange("Venda")}
                  value="Venda"
                />
              }
              label="Venda"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Xhosa}
                  onChange={handleChange("Xhosa")}
                  value="Xhosa"
                />
              }
              label="Xhosa"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Zulu}
                  onChange={handleChange("Zulu")}
                  value="Zulu"
                />
              }
              label="Zulu"
            />
          </FormGroup>
        </FormControl>
      </Grid>
    </div>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesComponent);
