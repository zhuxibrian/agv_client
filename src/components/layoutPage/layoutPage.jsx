'use strict';

import React from 'react';
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
import layoutSVG from '../../assets/images/layout.svg';
import styles from './layoutPage.less';

TweenOne.plugins.push(PathPlugin);

class layoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divSizeWidth: window.innerWidth- 240,
      divSizeHeight: window.innerHeight- 160,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = () => {
    const width = window.innerWidth - 240;
    const height = window.innerHeight - 160;
    const ratioWidth = width / 1920;
    const ratioHeight = height / 1080;
    const ratio = ratioWidth > ratioHeight ? ratioHeight : ratioWidth;
    this.setState({
      divSizeWidth: ratio * 1920,
      divSizeHeight: ratio * 1080,
    })
  }

  render() {
    var divStyle = {
      // makesure here is String确保这里是一个字符串，以下是es6写法
      backgroundImage: `url(${layoutSVG})`,
      backgroundSize: 'cover',
      width: this.state.divSizeWidth,
      height: this.state.divSizeHeight,
    };
    return (
      <div id="layoutDiv" className={styles.normal}>
        <div style={divStyle}>
        </div>
      </div>
    );
  }

};

export default layoutPage;
