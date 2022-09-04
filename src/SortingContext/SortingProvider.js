/* eslint-disable import/no-cycle */
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import buttonTypes from '../lib/buttonTypes';
import {
  bubbleSort, insertionSort, selectionSort, mergeSort,
} from '../lib/sortingAlgos';
import Bar from '../components/Bar';

export const SortingContext = React.createContext();
export const getHeights = () => {
  const heights = [];
  for (let i = 0; i < 10; i += 1) {
    const newHeight = Math.floor(Math.random() * 60);
    if (newHeight && !heights.includes(newHeight)) {
      heights.push(newHeight);
    } else {
      i -= 1;
    }
  }
  return heights;
};
export const getBars = (heights) => heights.map((height) => <Bar key={height} height={`${height}vh`} />);

function SortingProvider({ children }) {
  const heights = getHeights();
  const [bars, setBars] = useState(() => ([...getBars(heights)]));

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
      buttonActions, heights, bars, setBars,
    }), [])}
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
