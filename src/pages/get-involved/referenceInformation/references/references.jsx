import React from "react";
import { connect } from "react-redux";
import ReferenceComponent from "./referenceComponent";
import VerticalLinearStepper from "../../../../shared/components/navigation-bar/verticalStepper";

function getSteps() {
  return ["Reference Details"];
}

function getStepContent(index) {
  switch (index) {
    case 0:
      return <ReferenceComponent />;
    default:
      return "Unknown step";
  }
}

function ReferenceInformation() {
  return (
    <div>
      <div>
        <VerticalLinearStepper
          steps={getSteps()}
          stepContent={getStepContent}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReferenceInformation);
