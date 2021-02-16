import React, { Component } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class DropzoneDialogExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: [],
    };
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  handleSave(files) {
    //Saving files to state for further use and closing Modal.
    this.setState({
      files: files,
      open: false,
    });
  }

  handleOpen() {
    this.setState({
      open: true,
    });
  }

  validateDropZone() {
    return this.state.files.length === 0;
  }

  componentDidMount() {
    const { fileRef, identification, resume, fileUploadSection } = this.props;
    fileRef(this);

    if (fileUploadSection === "resume" && resume?.state) {
      this.setState({
        ...this.state,
        ...resume.state,
      });
    }

    if (fileUploadSection === "identification" && identification?.state) {
      this.setState({
        ...this.state,
        ...identification.state,
      });
    }
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen.bind(this)}>Add Image</Button>
        <DropzoneDialog
          open={this.state.open}
          onSave={this.handleSave.bind(this)}
          acceptedFiles={[
            "image/jpeg",
            "image/png",
            "image/bmp",
            "application/pdf",
            ".docx",
          ]}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}

DropzoneDialogExample.propTypes = {
  fileRef: PropTypes.object,
  identification: PropTypes.object,
  resume: PropTypes.object,
  fileUploadSection: PropTypes.string,
};

export const mapStateToProps = (state) => {
  const resumeInformation = state.volunteerDetails.resumeInformation;
  return {
    identification: resumeInformation.identification,
    resume: resumeInformation.resume,
  };
};

export default connect(mapStateToProps)(DropzoneDialogExample);
