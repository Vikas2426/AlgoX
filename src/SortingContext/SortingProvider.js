/* eslint-disable no-undef */
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import getHeights from '../lib/getHeights';
import constants from '../lib/constants';

export const SortingContext = React.createContext();
function SortingProvider({ children }) {
  const heights = useMemo(() => getHeights(), []);
  const [delay, setDelay] = useState(constants.MIN_DELAY);

  return (
    <SortingContext.Provider value={useMemo(() => ({
      heights, setDelay, delay,
    }), [heights, delay])}
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
