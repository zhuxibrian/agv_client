import React from 'react';
import { Popover, Button } from 'antd';
import markImg from '../assets/images/mark.png';



class MyMark extends React.Component {
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
    const handleClick = (e) => {
      this.props.handleClick(value.x, value.y, index);
      e.stopPropagation();
      e.preventDefault();
    };

    const markStyle = () => {
      return {
        border: 'none',
        background: 'transparent',
        position: 'absolute',
        left: value.x * markProps.layoutSize.divWidth - 10,
        top: value.y * markProps.layoutSize.divHeight - 20,
        width: '20px',
        height: '20px',
        backgroundImage: `url(${markImg})`,
        backgroundSize: 'cover',
      };
    };

    const markRender = () => {
      if (markProps.changeable) {
        return (
          <Button shape="circle" style={markStyle(value)} onClick={handleClick} />
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

export default MyMark;
