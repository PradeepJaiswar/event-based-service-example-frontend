import React from 'react';

import Notifications, { notify } from 'react-notify-toast';

class ImageUploader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const fileInput = e.target;
    if (fileInput.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)) {
      this.setState({ file: fileInput.files[0] });
    } else {
      fileInput.value = '';
      notify.show('Please make sure you are uploading image file', 'warning', 3000);
      this.setState({ file: null });
    }
  }
  onFormSubmit(e) {
    e.preventDefault();
    if (this.state.file) {
      const formData = new FormData();
      formData.append('file', this.state.file);
      this.props.uploadImage(formData, (response) => {
        if (response) {
          notify.show('Image uploaded successfully. Plesae wait images resizing is in progress ', 'success', 3000);
        } else {
          notify.show('There was some problem! Try again', 'error', 3000);
        }
      });
    } else {
      notify.show('Please select image file for upload', 'error', 3000);
    }
  }
  render() {
    return (
      <div className="header">
        <form onSubmit={this.onFormSubmit}>
          <h1>Upload File & Resize Demo</h1>
          <input type="file" name="uploadeFiile" className="file-upload" onChange={this.onChange} />
          <button type="submit" className="upload-btn" >Upload</button>
        </form>
        <Notifications />
      </div>
    );
  }
}

ImageUploader.propTypes = {
  uploadImage: React.PropTypes.func,
};

export default ImageUploader;
