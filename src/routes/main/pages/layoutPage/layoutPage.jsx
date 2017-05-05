'use strict';

import React from 'react';
import layoutSVG from '../../../../assets/images/layout.svg';

const divStyle = {
  color: 'white',
  backgroundImage: 'url(' + layoutSVG + ')',
  position: 'fixed',
  left: 200,
  top: 100,
  right: 1,
  bottom: 1,
};

const layoutPage = () => {
  return (
    <div style={divStyle}>layoutPage</div>
  );
};

export default layoutPage;
