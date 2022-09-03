import { useContext } from 'react';
import buttonTypes from '../lib/buttonTypes';
import { SortingContext } from '../SortingContext/SortingProvider';
import Button from './Button';
import StyledHeader from './styles/StyledHeader.styled';

function Header() {
  const { buttonActions } = useContext(SortingContext);
  const {
    BUBBLE_SORT, INSERTION_SORT, SELECTION_SORT, MERGE_SORT, RESET_ARRAY,
  } = buttonTypes;
  return (
    <StyledHeader>
      <div>
        <Button name={BUBBLE_SORT} clickHandler={() => buttonActions(BUBBLE_SORT)} />
        <Button name={INSERTION_SORT} clickHandler={() => buttonActions(INSERTION_SORT)} />
        <Button name={SELECTION_SORT} clickHandler={() => buttonActions(SELECTION_SORT)} />
        <Button name={MERGE_SORT} clickHandler={() => buttonActions(MERGE_SORT)} />
        <Button name={RESET_ARRAY} clickHandler={() => buttonActions(RESET_ARRAY)} />
      </div>
    </StyledHeader>
  );
}

export default Header;
