import React from "react";
import { connect } from "react-redux";
import BasicInformationComponent from "./basicInformationComponent";
import AddressDetails from "../address-details/addressDetails";
import VerticalLinearStepper from "../../../shared/components/navigation-bar/verticalStepper";
import PersonalInformation from "../personal-information/personalInformation";
import HobbiesComponent from "../hobbies-component/hobbies";
import LanguageComponent from "../languages-component/languagesComponent";
function getSteps() {
  return [
    "Personal Details",
    "Personal Information",
    "Languages Spoken",
    "Address Details",
    "Hobbies"
  ];
}

function getStepContent(index) {
  switch (index) {
    case 0:
      return <BasicInformationComponent />;
    case 1:
      return <PersonalInformation />;
    case 2:
      return <LanguageComponent />;
    case 3:
      return <AddressDetails />;
    case 4:
      return <HobbiesComponent />;
    default:
      return "Unknown step";
  }
}

function BasicInformation() {
  return (
    <div>
      <VerticalLinearStepper steps={getSteps()} stepContent={getStepContent} />
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BasicInformation);
