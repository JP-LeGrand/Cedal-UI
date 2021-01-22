import React, { Component } from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import {Button} from '@material-ui/core';
import PropTypes from 'prop-types';

export default class DropzoneDialogExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: []
        };
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files,
            open: false
        });
    }

    handleOpen() {
        this.setState({
            open: true,
        });
    }

    validateDropZone(){
        return this.state.files.length === 0
    }

    componentDidMount(){
        const {fileRef} = this.props;
        fileRef(this);
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleOpen.bind(this)}>
                  Add Image
                </Button>
                <DropzoneDialog
                    open={this.state.open}
                    onSave={this.handleSave.bind(this)}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp', 'application/pdf', '.docx']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={this.handleClose.bind(this)}
                />
            </div>
        );
    }
}

DropzoneDialogExample.propTypes ={
    fileRef: PropTypes.object
}