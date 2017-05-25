const getClickPercent = (clickEvent) => {
  const evt = clickEvent || window.event;
  const srcObj = evt.target || evt.srcElement;
  const pointX = evt.clientX - srcObj.getBoundingClientRect().left;
  const pointY = evt.clientY - srcObj.getBoundingClientRect().top;
  const x = pointX / srcObj.getBoundingClientRect().width;
  const y = pointY / srcObj.getBoundingClientRect().height;
  return {
    x: x,
    y: y
  }
}

const pathToString = (pointArray, width, height) => {
  let pathString;
  pointArray.forEach((value, index) => {
    if (index === 0) pathString = `m${(value.x * width)},${(value.y * height)}`;
    else pathString += `l${((value.x - pointArray[index - 1].x) * width)},${((value.y - pointArray[index - 1].y) * height)}`;
  });
  return pathString;
};

module.exports = { getClickPercent, pathToString };






