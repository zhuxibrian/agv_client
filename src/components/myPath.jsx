import React from 'react';
import { Layer, Stage, Path } from 'react-konva';

class MyPath extends React.Component {
  constructor(...args) {
    super(...args);
  }
  render() {
    const myPathProps = this.props.myPathProps;
    return (
      <Stage width={myPathProps.layoutSize.divWidth} height={myPathProps.layoutSize.divHeight}>
        <Layer>
          <Path
            data={myPathProps.pathString}
            stroke="#2255cc"
            strokeWidth={1}
          />
        </Layer>
      </Stage>

    );
  }
}

export default MyPath;
