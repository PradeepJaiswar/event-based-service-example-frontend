import React from 'react';
import Websocket from 'react-websocket';

import { getWebSocketUrl } from 'shared/utils/env';

class ImagesList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
    this.firstLoad = true;
    this.handleData = this.handleData.bind(this);
    this.webSocketUrl = getWebSocketUrl();
  }
  componentDidMount() {
    this.props.getImages();
  }
  handleData(data) {
    if (data && data.length > 0) {
      this.firstLoad = false;
      this.props.getImages();
    }
  }
  render() {
    let content = null;
    if (this.props.isFetching && this.firstLoad) {
      content = <h4>Loading images...</h4>;
    } else if (this.props.data && this.props.data.length === 0) {
      content = <h4>No images to show!</h4>;
    } else {
      content = (
        <div className="row">
          {this.props.data && this.props.data.map((obj, index) =>
            <div className="column" key={index} >
              <img src={obj} alt={obj} width="100%" height="auto" />
            </div>
          )}
        </div>
      );
    }
    return (
      <div className="imglist">
        {content}
        <Websocket url={this.webSocketUrl} onMessage={this.handleData} />
      </div>
    );
  }
}

ImagesList.propTypes = {
  isFetching: React.PropTypes.bool,
  data: React.PropTypes.array,
  getImages: React.PropTypes.func,
};

export default ImagesList;
