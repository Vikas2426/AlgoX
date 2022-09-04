import constants from './constants';

const { animationColor, originalColor } = constants;
/* eslint-disable no-undef */
const displayComparison = (h1, h2) => {
  const details = document.getElementById('details');
  details.innerText = `Comparing: ${h1} and ${h2}\n`;
};

const animator = (animationArr, swapArr) => {
  for (let i = 0; i < animationArr.length; i += 1) {
    const firstIdx = animationArr[i][0];
    const secondIdx = animationArr[i][1];
    const swap1Idx = swapArr[i][0];
    const swap2Idx = swapArr[i][1];
    const docBars = document.getElementsByClassName('bars');
    const style1 = docBars[firstIdx].style;
    const style2 = docBars[secondIdx].style;
    let style3 = null;
    let style4 = null;
    if (swap1Idx > -1 && swap2Idx > -1) {
      style3 = docBars[swap1Idx].style;
      style4 = docBars[swap2Idx].style;
    }

    setTimeout(() => {
      style1.background = animationColor;
      style2.background = animationColor;
      displayComparison(style1.height, style2.height);
      if (style3 && style4) {
        const temp = style4.height;
        style4.height = style3.height;
        style3.height = temp;
        displayComparison(style4.height, style3.height);
      }
    }, 100 * i);

    setTimeout(() => {
      style1.background = originalColor;
      style2.background = originalColor;
    }, 100 * (i + 1));
  }
};

export default animator;
