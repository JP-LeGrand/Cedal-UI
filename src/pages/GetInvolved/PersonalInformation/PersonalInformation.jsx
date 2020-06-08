import React from "react";
import AddressDetails from "./AddressDetails/AddressDetails";
import BiographicalInformation from "./BiographicalInformation/BiographicalInformation";
import LanguageDetails from "./LanguageDetails/LanguageDetails";
import Hobbies from "./Hobbies/Hobbies";
import BasicInformation from "./BasicInformation/BasicInformation";
import VerticalLinearStepper from "../../../shared/components/navigation-bar/verticalStepper"
import {Grid} from "@material-ui/core";

function getSteps() {
    return [
        "Biographical Information",
        "Basic Information",
        "Languages Spoken",
        "Address Details",
        "Hobbies"
    ];
}

function getStepContent(index) {
    switch (index) {
        case 0:
            return <BiographicalInformation />;
        case 1:
            return <BasicInformation />;
        case 2:
            return <LanguageDetails />;
        case 3:
            return <AddressDetails />;
        case 4:
            return <Hobbies />;
        default:
            return "Unknown step";
    }
}

function PersonalInformation() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <VerticalLinearStepper steps={getSteps()} stepContent={getStepContent} />
            </Grid>
        </Grid>
    );
}

export default PersonalInformation
