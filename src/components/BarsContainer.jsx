/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';
import { SortingContext } from '../SortingContext/SortingProvider';
import Bar from './Bar';

function BarsContainer() {
  const { heights } = useContext(SortingContext);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '70vh',
      maxWidth: '100vw',
      overflow: 'hidden',
      padding: '0.5em',
    }}
    >
      {heights.map((height, idx) => <Bar key={idx} height={`${height}vh`} />)}
    </div>
  );
}

export default BarsContainer;
