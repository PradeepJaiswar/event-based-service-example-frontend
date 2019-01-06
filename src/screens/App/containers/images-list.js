import { connect } from 'react-redux';

import ImagesList from '../components/images-list';
import images from '../actions';

function mapStateToProps(state) {
  return {
    data: state.app.imagesList.data.length ? state.app.imagesList.data.reverse() : [],
    isFetching: state.app.imagesList.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getImages() {
      dispatch(images.getImages());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesList);
