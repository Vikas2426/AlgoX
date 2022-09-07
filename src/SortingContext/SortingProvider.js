/* eslint-disable no-undef */
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import getHeights from '../lib/getHeights';
import constants from '../lib/constants';

export const SortingContext = React.createContext();
function SortingProvider({ children }) {
  const [delay, setDelay] = useState(constants.MIN_DELAY);
  const [arrayLength, setArrayLength] = useState(constants.DEFAULT_NO_OF_BARS);
  const heights = useMemo(() => getHeights(arrayLength), [arrayLength]);
  return (
    <SortingContext.Provider value={useMemo(() => ({
      heights, setDelay, delay, setArrayLength, arrayLength,
    }), [heights, delay, arrayLength])}
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
