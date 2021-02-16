import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DropZone from "../../../shared/components/navigation-bar/dropZone";
import { Typography } from "@material-ui/core";

function Resume(props) {
  const [state, setState] = React.useState();
  const { resumeInformationRef } = props;

  const validateResume = () => {
    let validDropZone = state.validateDropZone();
    return !validDropZone;
  };

  useEffect(() => {
    resumeInformationRef({ state, validateResume });
  }, [state]);

  return (
    <Grid container>
      <Grid>
        <Typography>
          Please upload your Curriculum Vitae (CV) or Resume
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <DropZone fileRef={setState} fileUploadSection={"resume"} />
      </Grid>
    </Grid>
  );
}

Resume.propTypes = {
  classes: PropTypes.object,
  resumeInformationRef: PropTypes.func,
  resumeInformation: PropTypes.object,
};

export const mapStateToProps = (state) => {
  const resumeInformation = state.volunteerDetails.resumeInformation;
  return {
    resumeInformation: resumeInformation,
  };
};

export default connect(mapStateToProps)(Resume);
