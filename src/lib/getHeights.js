/* eslint-disable no-undef */
const getHeights = () => {
  const heights = [];
  const numberOfBars = parseInt(window.innerWidth / 8, 10);
  for (let i = 0; i < numberOfBars; i += 1) {
    const newHeight = Math.floor((Math.random() * 50) + 10);
    heights.push(newHeight);
  }
  return heights;
};

export default getHeights;
