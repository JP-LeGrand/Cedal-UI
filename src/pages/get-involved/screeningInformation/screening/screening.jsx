import React from "react";
import { connect } from "react-redux";
import VerticalLinearStepper from "../../../shared/components/navigation-bar/verticalStepper";

function getSteps() {
  return [
    "Volunteering Availability",
    "Volunteering Choices",
    "Volunteering Phase"
  ];
}

function getStepContent(index) {
  switch (index) {
    case 0:
      return "Availability";
    case 1:
      return "Volunteering Choices";
    case 2:
      return "Volunteering Phase";
    default:
      return "Unknown step";
  }
}

function Screening() {
  return (
    <div>
      <VerticalLinearStepper steps={getSteps()} stepContent={getStepContent} />
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Screening);
