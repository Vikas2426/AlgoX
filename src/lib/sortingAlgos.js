/* eslint-disable no-param-reassign */
const swap = (heights, i, j, swapArr) => {
  swapArr.push([i, j]);
  const temp = heights[i];
  heights[i] = heights[j];
  heights[j] = temp;
};

const bubbleSort = (heights, animationArr, swapArr) => {
  for (let i = 0; i < heights.length - 1; i += 1) {
    for (let j = 0; j < heights.length - i - 1; j += 1) {
      animationArr.push([j, j + 1]);
      if (heights[j] > heights[j + 1]) {
        swap(heights, j, j + 1, swapArr);
      } else {
        swapArr.push([-1, -1]);
      }
    }
  }
};

const insertionSort = (heights, animationArr, swapArr) => {
  for (let i = 1; i < heights.length; i += 1) {
    let j = i;
    while (j > 0) {
      animationArr.push([j, j - 1]);
      if (heights[j] < heights[j - 1]) {
        swap(heights, j, j - 1, swapArr);
      } else {
        swapArr.push([-1, -1]);
      }
      j -= 1;
    }
  }
};

const selectionSort = (heights, animationArr, swapArr) => {
  for (let i = 0; i < heights.length; i += 1) {
    let min = i;
    let j = i;
    while (j < heights.length) {
      animationArr.push([j, min]);
      swapArr.push([-1, -1]);
      if (heights[j] < heights[min]) {
        min = j;
      }
      j += 1;
    }
    swapArr.pop();
    swap(heights, i, min, swapArr);
  }
};

const merge = (heights, left, mid, endIdx, animationArr, swapArr) => {
  let right = mid + 1;

  while (left <= mid && right <= endIdx) {
    if (heights[right] < heights[left]) {
      let rightCopy = right;
      while (rightCopy > left) {
        animationArr.push([rightCopy, rightCopy - 1]);
        swap(heights, rightCopy, rightCopy - 1, swapArr);
        rightCopy -= 1;
      }
      mid += 1;
      right += 1;
    }
    left += 1;
  }
};

const mergeSort = (heights, startIdx, endIdx, animationArr, swapArr) => {
  if (endIdx <= startIdx) return;
  const mid = startIdx + parseInt((endIdx - startIdx) / 2, 10);
  mergeSort(heights, startIdx, mid, animationArr, swapArr);
  mergeSort(heights, mid + 1, endIdx, animationArr, swapArr);
  merge(heights, startIdx, mid, endIdx, animationArr, swapArr);
};

export {
  bubbleSort, mergeSort, insertionSort, selectionSort,
};
