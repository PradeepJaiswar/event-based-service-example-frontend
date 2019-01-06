import React from 'react';

import ImagesList from '../containers/images-list';
import ImageUploader from '../containers/image-uploader';

import '../styles/style.css';

const App = () => (
  <div>
    <ImageUploader />
    <ImagesList />
  </div>
);

export default App;
