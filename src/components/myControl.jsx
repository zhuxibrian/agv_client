import React from 'react';
import { Popover, Button } from 'antd';
import controlNormalImg from '../assets/images/control_normal.png';

class MyControl extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );

    const value = this.props.value;
    const index = this.props.index;
    const layoutSize = this.props.layoutSize;

    const controlStyle = (value) => {
      return {
        border: 'none',
        background: 'transparent',
        position: 'absolute',
        left: value.x * layoutSize.divWidth - 10,
        top: value.y * layoutSize.divHeight - 10,
        width: '20px',
        height: '20px',
        backgroundImage: `url(${controlNormalImg})`,
        backgroundSize: 'cover',
      };
    };

    return (
      <Popover key={index} content={content} title="Title" trigger="click">
        <Button shape="circle" style={controlStyle(value)} />
      </Popover>
    );
  }
}

export default MyControl;
