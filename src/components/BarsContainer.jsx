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
      height: '90vh',
      width: '100vw',
    }}
    >
      {bars}
    </div>
  );
}

export default BarsContainer;
