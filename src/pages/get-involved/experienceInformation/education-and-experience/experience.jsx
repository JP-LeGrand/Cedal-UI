import React from "react";
import { connect } from "react-redux";
import VerticalLinearStepper from "../../../shared/components/navigation-bar/verticalStepper";

function getSteps() {
  return ["Education Experience", "Work Experience", "Volunteering Experience"];
}

function getStepContent(index) {
  switch (index) {
    case 0:
      return "Education Experience";
    case 1:
      return "Work Experience";
    case 2:
      return "Volunteering Experience";
    default:
      return "Unknown step";
  }
}

function Experience() {
  return (
    <div>
      <VerticalLinearStepper steps={getSteps()} stepContent={getStepContent} />
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
