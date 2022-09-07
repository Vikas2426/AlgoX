/* eslint-disable no-undef */
import { buttonTypes } from './constants';
import {
  bubbleSort, insertionSort, selectionSort, mergeSort,
} from './sortingAlgos';
import animator from './animator';

export default (buttonType, heights, delay) => {
  const animationArr = [];
  const swapArr = [];
  switch (buttonType) {
    case buttonTypes.BUBBLE_SORT:
      bubbleSort(heights, animationArr, swapArr);
      break;
    case buttonTypes.MERGE_SORT:
      mergeSort(heights, 0, heights.length - 1, animationArr, swapArr);
      break;
    case buttonTypes.INSERTION_SORT:
      insertionSort(heights, animationArr, swapArr);
      break;
    case buttonTypes.SELECTION_SORT:
      selectionSort(heights, animationArr, swapArr);
      break;
    case buttonTypes.RESET_ARRAY:
      window.location.reload();
      break;
    default:
      break;
  }
  animator(animationArr, swapArr, delay);
};
