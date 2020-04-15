import React, { Component } from 'react';

import { imagePath } from '../../utils/assetUtils';
// import styles from './about.scss';

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="title">About page</h1>
        <img className="react-logo" src={imagePath('react.svg')} alt="" />
      </div>
    );
  }
}

export default About;
