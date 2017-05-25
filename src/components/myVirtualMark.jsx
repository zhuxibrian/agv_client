import React from 'react';
import { Popover, Button } from 'antd';
import markImg from '../assets/images/virtualMark.png';



class MyVirtualMark extends React.Component {
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
    const markProps = this.props.markProps;

    const markStyle = () => {
      return {
        border: 'none',
        background: 'transparent',
        position: 'absolute',
        left: value.x * markProps.layoutSize.divWidth - 8,
        top: value.y * markProps.layoutSize.divHeight - 16,
        width: '16px',
        height: '16px',
        backgroundImage: `url(${markImg})`,
        backgroundSize: 'cover',
      };
    };

    const markRender = () => {
      if (markProps.changeable) {
        return (
          <Button shape="circle" style={markStyle(value)} />
        )
      } else {
        return (
          <Popover content={content} title="Title" trigger="click">
            <Button shape="circle" style={markStyle(value)} />
          </Popover>
        )
      }
    }

    return (
      markRender()
    );
  }
}

export default MyVirtualMark;
