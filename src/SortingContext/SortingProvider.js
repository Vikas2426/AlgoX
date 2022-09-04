/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import buttonTypes from '../lib/buttonTypes';
import {
  bubbleSort, insertionSort, selectionSort, mergeSort,
} from '../lib/sortingAlgos';

export const SortingContext = React.createContext();
export const getHeights = () => {
  const heights = [];
  const numberOfBars = parseInt(window.innerWidth / 8, 10);
  for (let i = 0; i < numberOfBars; i += 1) {
    const newHeight = Math.floor((Math.random() * 50) + 10);
    heights.push(newHeight);
  }
  return heights;
};

function SortingProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [heights, setHeights] = useState(getHeights);

  const buttonActions = (buttonType) => {
    switch (buttonType) {
      case buttonTypes.BUBBLE_SORT:
        bubbleSort(heights);
        break;
      case buttonTypes.MERGE_SORT:
        mergeSort(heights, 0, heights.length - 1);
        break;
      case buttonTypes.INSERTION_SORT:
        insertionSort(heights);
        break;
      case buttonTypes.SELECTION_SORT:
        selectionSort(heights);
        break;
      case buttonTypes.RESET_ARRAY:
        // eslint-disable-next-line no-undef
        window.location.reload();
        break;
      default:
        break;
    }
  };

  return (
    <SortingContext.Provider value={useMemo(() => ({
      buttonActions, heights,
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
