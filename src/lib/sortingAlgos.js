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
    for (let j = i + 1; j < heights.length; j += 1) {
      animationArr.push([i, j]);
      if (heights[i] > heights[j]) {
        swap(heights, i, j);
      } else {
        swapArr.push([-1, -1]);
      }
    }
  }
  animator(animationArr, swapArr);
};

const merge = (heights, startIdx, mid, endIdx) => {
  let i = startIdx;
  let j = mid + 1;
  const result = [];
  while (i < mid + 1 && j < endIdx) {
    animationArr.push([i, j]);
    if (heights[i] < heights[j]) {
      result.push(heights[i]);
      i += 1;
    } else {
      result.push(heights[j]);
      j += 1;
    }
    swapArr.push([i, j]);
  }
  while (i < heights.length) {
    result.push(heights[i]);
    swapArr.push([i, j]);
    i += 1;
  }
  while (j < heights.length) {
    swapArr.push([i, j]);
    result.push(heights[j]);
    j += 1;
  }
  heights.splice(startIdx, endIdx - startIdx + 1, ...result);
  console.log(heights);
};

const mergeSort = (heights, startIdx = 0, endIdx = heights.length) => {
  if (endIdx - startIdx) return;
  const mid = parseInt(heights.length / 2, 10);
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
