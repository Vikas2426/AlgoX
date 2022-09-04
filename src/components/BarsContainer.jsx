import { useContext } from 'react';
import { SortingContext } from '../SortingContext/SortingProvider';

function BarsContainer() {
  const { bars } = useContext(SortingContext);
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
      {bars}
    </div>
  );
}

export default BarsContainer;
