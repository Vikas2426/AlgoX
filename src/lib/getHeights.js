import constants from './constants';

const getHeights = (arrayLength) => {
  const heights = [];
  const length = arrayLength || constants.DEFAULT_NO_OF_BARS;
  for (let i = 0; i < length; i += 1) {
    const newHeight = Math.floor((Math.random() * 50) + 10);
    heights.push(newHeight);
  }
  return heights;
};

export default getHeights;
