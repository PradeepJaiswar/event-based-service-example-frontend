import { connect } from 'react-redux';

import ImageUploader from '../components/image-uploader';
import images from '../actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    uploadImage(formData, callback) {
      dispatch(images.uploadImages(formData, callback));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploader);
