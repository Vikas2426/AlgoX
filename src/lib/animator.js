/* eslint-disable import/no-cycle */

const animator = (animationArr, swapArr) => {
  for (let i = 0; i < animationArr.length; i += 1) {
    const firstIdx = animationArr[i][0];
    const secondIdx = animationArr[i][1];
    const swap1Idx = swapArr[i][0];
    const swap2Idx = swapArr[i][1];
    // eslint-disable-next-line no-undef
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
      style1.background = 'linear-gradient(to top, #ff416c, #ff4b2b)';
      style2.background = 'linear-gradient(to top, #ff416c, #ff4b2b)';
      if (style3 && style4) {
        const temp = style1.height;
        style3.height = style2.height;
        style4.height = temp;
      }
    }, 100 * i);

    setTimeout(() => {
      style1.background = 'linear-gradient(to left, #fdc830, #f37335)';
      style2.background = 'linear-gradient(to left, #fdc830, #f37335)';
    }, 100 * (i + 1));
  }
};

export default animator;
