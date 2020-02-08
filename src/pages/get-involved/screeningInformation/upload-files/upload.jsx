import React from "react";
import { connect } from "react-redux";
import UploadComponent from "./uploadComponent";
import VerticalLinearStepper from "../../../shared/components/navigation-bar/verticalStepper";

function getSteps() {
  return ["Upload ID Document"];
}

function getStepContent(index) {
  switch (index) {
    case 0:
      return <UploadComponent />;
    default:
      return "Unknown step";
  }
}

function Upload() {
  return (
    <div>
      <VerticalLinearStepper steps={getSteps()} stepContent={getStepContent} />
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
