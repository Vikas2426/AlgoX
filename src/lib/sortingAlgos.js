/* eslint-disable import/no-cycle */
import animator from './animator';

let animationArr = [];
let swapArr = [];

/* eslint-disable no-param-reassign */
const swap = (heights, i, j) => {
  swapArr.push([i, j]);
  const temp = heights[i];
  heights[i] = heights[j];
  heights[j] = temp;
};

const bubbleSort = (heights) => {
  animationArr = [];
  swapArr = [];
  for (let i = 0; i < heights.length - 1; i += 1) {
    for (let j = 0; j < heights.length - i - 1; j += 1) {
      animationArr.push([j, j + 1]);
      if (heights[j] > heights[j + 1]) {
        swap(heights, j, j + 1);
      } else {
        swapArr.push([-1, -1]);
      }
    }
  }
  animator(animationArr, swapArr);
};

const merge = (heights, startIdx, mid, endIdx) => {
  let j = mid + 1;

  while (startIdx <= mid && j <= endIdx) {
    animationArr.push([j, startIdx]);
    swapArr.push([-1, -1]);
    if (heights[j] < heights[startIdx]) {
      let j2 = j;
      while (j2 > startIdx) {
        animationArr.push([j2, j2 - 1]);
        swap(heights, j2, j2 - 1);
        j2 -= 1;
      }
      startIdx += 1;
      mid += 1;
      j += 1;
    } else {
      startIdx += 1;
    }
  }
  animator(animationArr, swapArr);
};

const mergeSort = (heights, startIdx, endIdx = 100) => {
  if (endIdx <= startIdx) return;
  const mid = startIdx + parseInt((endIdx - startIdx) / 2, 10);
  mergeSort(heights, startIdx, mid);
  mergeSort(heights, mid + 1, endIdx);
  merge(heights, startIdx, mid, endIdx);
};

const insertionSort = (heights) => {
  animationArr = [];
  swapArr = [];
  for (let i = 1; i < heights.length; i += 1) {
    let j = i;
    while (j > 0) {
      animationArr.push([j, j - 1]);
      if (heights[j] < heights[j - 1]) {
        swap(heights, j, j - 1);
      } else {
        swapArr.push([-1, -1]);
      }
      j -= 1;
    }
  }

  animator(animationArr, swapArr);
};

const selectionSort = (heights) => {
  animationArr = [];
  swapArr = [];
  for (let i = 0; i < heights.length; i += 1) {
    let min = i;
    let j = i;
    while (j < heights.length) {
      animationArr.push([i, min]);
      swapArr.push([-1, -1]);
      if (heights[j] < heights[min]) {
        min = j;
      }
      j += 1;
    }
    swapArr.pop();
    swap(heights, i, min);
  }
  animator(animationArr, swapArr);
};
export {
  bubbleSort, mergeSort, insertionSort, selectionSort,
};
