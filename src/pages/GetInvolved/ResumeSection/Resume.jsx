import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Colors from "../../../shared/styles/themes/colours";
import DropZone from "../../../shared/components/navigation-bar/dropZone";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(1),
  },
  textField: {
    maxWidth: "368px",
    width: "100%",
    paddingBottom: "15px",
  },
  checked: {
    color: `${Colors.oceangreen} !important`,
  },
}));

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
