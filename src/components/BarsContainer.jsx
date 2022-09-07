/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';
import { SortingContext } from '../SortingContext/SortingProvider';
import Bar from './Bar';
import StyledBarsContainer from './styles/StyledBarsContainer.styled';

function BarsContainer() {
  const { heights } = useContext(SortingContext);
  return (
    <StyledBarsContainer>
      {heights.map((height, idx) => <Bar key={idx} height={`${height}vh`} />)}
    </StyledBarsContainer>
  );
}

export default BarsContainer;
