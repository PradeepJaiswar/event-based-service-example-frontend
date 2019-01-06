import call from 'screens/App/shared/enhanced-fetch';

import constants from '../constants';

export const uploadImages = (formData, callback) => (
  () => (
    call(constants.END_POINT.UPLOAD_IMAGES, {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response && response.data) {
        callback(response);
      } else {
        callback(false);
      }
    }).catch((e) => {
      callback(false);
      console.log(e); // eslint-disable-line
    })
  )
);

export default {
  uploadImages,
};
