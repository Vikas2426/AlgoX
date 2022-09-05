/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import buttonTypes from '../lib/buttonTypes';
import {
  bubbleSort, insertionSort, selectionSort, mergeSort,
} from '../lib/sortingAlgos';
import animator from '../lib/animator';

export const SortingContext = React.createContext();
export const getHeights = () => {
  const heights = [];
  const numberOfBars = window.innerWidth < 600 ? parseInt(window.innerWidth / 8, 10) : 70;
  for (let i = 0; i < numberOfBars; i += 1) {
    const newHeight = Math.floor((Math.random() * 50) + 10);
    heights.push(newHeight);
  }
  return heights;
};

function SortingProvider({ children }) {
  const [heights, setHeights] = useState(getHeights);
  const [delay, setDelay] = useState(1000);
  const buttonActions = (buttonType) => {
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

  return (
    <SortingContext.Provider value={useMemo(() => ({
      buttonActions, heights, setDelay, delay,
    }), [heights])}
    >
      {children}
    </SortingContext.Provider>
  );
}

SortingProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SortingProvider;
