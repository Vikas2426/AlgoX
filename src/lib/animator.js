/* eslint-disable no-undef */
import constants from './constants';

const { ANIMATION_COLOR, ORIGINAL_COLOR } = constants;

const animator = (animationArr, swapArr, delay) => {
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
      style1.background = ANIMATION_COLOR;
      style2.background = ANIMATION_COLOR;
      if (style3 && style4) {
        [style4.height, style3.height] = [style3.height, style4.height];
      }
    }, delay * i);

    setTimeout(() => {
      style1.background = ORIGINAL_COLOR;
      style2.background = ORIGINAL_COLOR;
    }, delay * (i + 1));
  }
};

export default animator;
