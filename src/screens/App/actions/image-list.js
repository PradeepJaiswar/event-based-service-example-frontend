import call from 'screens/App/shared/enhanced-fetch';

import constants from '../constants';

const { ACTIONS } = constants;

const { TOGGLE_FETCHING, ERROR_FETCHING, RECIEVED } = ACTIONS.IMAGES_LIST;

export const fetching = flag => (
  {
    type: TOGGLE_FETCHING,
    isFetching: flag,
  }
);

export const errFetching = flag => (
  {
    type: ERROR_FETCHING,
    errorFetching: flag,
  }
);

export const recieved = payload => (
  {
    type: RECIEVED,
    payload,
  }
);

export const getImages = () => (
  (dispatch) => {
    dispatch(fetching(true));
    return call(constants.END_POINT.IMAGES).then((response) => {
      dispatch(fetching(false));
      if (response) {
        dispatch(recieved(response));
      } else {
        dispatch(errFetching(true));
      }
    }).catch((e) => {
      console.log(e); // eslint-disable-line
      dispatch(errFetching(false));
      dispatch(errFetching(true));
    });
  }
);

export default {
  fetching,
  errFetching,
  recieved,
  getImages,
};
