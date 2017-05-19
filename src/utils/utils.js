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

module.exports = { getClickPercent };






