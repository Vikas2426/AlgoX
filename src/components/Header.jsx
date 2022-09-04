import { useContext } from 'react';
import buttonTypes from '../lib/buttonTypes';
import { SortingContext } from '../SortingContext/SortingProvider';
import Button from './Button';
import StyledHeader from './styles/StyledHeader.styled';

function Header() {
  const { buttonActions } = useContext(SortingContext);

  return (
    <StyledHeader>
      {Object.values(buttonTypes).map((buttonType) => (
        <Button key={buttonType} name={buttonType} clickHandler={() => buttonActions(buttonType)} />
      ))}
    </StyledHeader>
  );
}

export default Header;
