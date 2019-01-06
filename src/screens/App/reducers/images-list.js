import constants from '../constants';

const { ACTIONS } = constants;

const ImagesList = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.IMAGES_LIST.TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case ACTIONS.IMAGES_LIST.ERROR_FETCHING:
      return {
        ...state,
        errFetching: action.errFetching,
      };
    case ACTIONS.IMAGES_LIST.RECIEVED:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default ImagesList;
