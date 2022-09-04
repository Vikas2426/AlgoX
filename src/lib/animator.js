/* eslint-disable no-param-reassign */
import constants from './constants';

const { animationColor, originalColor } = constants;
/* eslint-disable no-undef */
const displayComparison = (h1, h2, isSwapping = false) => {
  const details = document.getElementById('details');
  details.innerText = isSwapping
    ? `Comparing: ${h1} and ${h2}\n Swapping`
    : `Comparing: ${h1} and ${h2}\n`;
};

const swapInnerText = (e1, e2) => {
  const temp = e1.innerText;
  e1.innerText = e2.innerText;
  e2.innerText = temp;
};

const animator = (animationArr, swapArr) => {
  for (let i = 0; i < animationArr.length; i += 1) {
    const firstIdx = animationArr[i][0];
    const secondIdx = animationArr[i][1];
    const swap1Idx = swapArr[i][0];
    const swap2Idx = swapArr[i][1];
    const docBars = document.getElementsByClassName('bars');
    const firstElem = docBars[firstIdx];
    const secondElem = docBars[secondIdx];
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
        displayComparison(style4.height, style3.height, true);
        swapInnerText(firstElem, secondElem);
      }
    }, 1000 * i);

    setTimeout(() => {
      style1.background = originalColor;
      style2.background = originalColor;
    }, 1000 * (i + 1));
  }
};

export default animator;
