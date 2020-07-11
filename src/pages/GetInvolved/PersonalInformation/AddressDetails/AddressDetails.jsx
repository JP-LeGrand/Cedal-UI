import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapStateToProps} from "../BiographicalInformation/BiographicalInformation";

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

function AddressDetails(props) {
    const classes = useStyles();
    const [state,setState] = React.useState({
        streetName:"",
        streetNameError:false,
        streetNameErrorMessage:"",
        city:"",
        cityError:false,
        cityErrorMessage:"",
        postalCode:"",
        postalCodeError:false,
        postalCodeErrorMessage:"",
        province:"",
        provinceError:false,
        provinceErrorMessage:"",
        country:"",
        countryError:false,
        countryErrorMessage:"",
    });
    const {personalInformationRef, personalInformation}=props;

    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
            [`${name}Error`]: false,
            [`${name}ErrorMessage`]: ''
        })
    };

    const validateAddressDetails=()=>{
        let streetName= state.streetName,
            city=state.city,
            postalCode=state.postalCode,
            province=state.province,
            country=state.country;

        let streetNameErrorMessage, provinceErrorMessage,
            postalCodeErrorMessage, cityErrorMessage, countryErrorMessage;

        const streetNameError = !streetName?.trim()
        const cityError = !city?.trim()
        const postalCodeError = !postalCode?.trim();
        const provinceError = !province?.trim();
        const countryError= !country?.trim();

        if(countryError){
            countryErrorMessage='Country is required'
        }
        else{
            countryErrorMessage=''
        }
        if(provinceError){
            provinceErrorMessage='Province is required'
        }
        else{
            provinceErrorMessage=''
        }
        if(streetNameError){
            streetNameErrorMessage='Street name is required'
        }else{
            streetNameErrorMessage=''
        }
        if(cityError){
            cityErrorMessage='City is required'
        }else{
            cityErrorMessage=''
        }
        if(postalCodeError){
            postalCodeErrorMessage='Postal code is required'
        }else{
            postalCodeErrorMessage=''
        }

        setState({
            streetNameError, streetNameErrorMessage,
            cityError, cityErrorMessage, provinceError, provinceErrorMessage,
            postalCodeError, postalCodeErrorMessage,streetName, city, province, postalCode,
            countryError, country, countryErrorMessage
        });

        return !(streetNameError || cityError
            || provinceError || postalCodeError || countryError)
    };

    useEffect(() => {
        setState({
            ...state,
            ...personalInformation.addressDetails,
        })
    },[personalInformation.addressDetails]);

    useEffect(() => {
        personalInformationRef({state, validateAddressDetails})
    },[state]);

    return (
        <Grid container justify={"center"} className={classes.root}>
                    <Grid item xs={12}>
                        <TextField
                            id="streetName"
                            label="Street Name"
                            className={classes.textField}
                            value={state.streetName ?? ""}
                            error={state.streetNameError}
                            helperText={state.streetNameErrorMessage ?? ""}
                            onChange={handleChange("streetName")}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="city"
                            label="City"
                            className={classes.textField}
                            value={state.city ?? ""}
                            error={state.cityError}
                            helperText={state.cityErrorMessage ?? ""}
                            onChange={handleChange("city")}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="postalCode"
                            label="Postal Code"
                            className={classes.textField}
                            value={state.postalCode ?? ""}
                            error={state.postalCodeError}
                            helperText={state.postalCodeErrorMessage ?? ""}
                            onChange={handleChange("postalCode")}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="province"
                            label="Province"
                            className={classes.textField}
                            value={state.province ?? ""}
                            error={state.provinceError}
                            helperText={state.provinceErrorMessage?? ""}
                            onChange={handleChange("province")}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="country"
                            label="Country"
                            className={classes.textField}
                            value={state.country ?? ""}
                            error={state.countryError}
                            helperText={state.countryErrorMessage}
                            onChange={handleChange("country")}
                        />
                    </Grid>
        </Grid>
    );
}

AddressDetails.propTypes={
    classes:PropTypes.object,
    personalInformation:PropTypes.object,
    personalInformationRef:PropTypes.func
};

export default connect(mapStateToProps)(AddressDetails)
