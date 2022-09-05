/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext } from 'react';
import buttonTypes from '../lib/buttonTypes';
import { SortingContext } from '../SortingContext/SortingProvider';
import Button from './Button';
import StyledHeader from './styles/StyledHeader.styled';

function Header() {
  const { buttonActions, setDelay } = useContext(SortingContext);

  return (
    <StyledHeader>
      <div>
        {Object.values(buttonTypes).map((buttonType) => (
          <Button
            key={buttonType}
            name={buttonType}
            clickHandler={() => buttonActions(buttonType)}
          />
        ))}
      </div>
      <label htmlFor="delay" style={{ color: 'white' }}>
        Speed
      </label>
      <input
        type="range"
        name="delay"
        defaultValue={1000}
        onChange={(event) => setDelay(1000 - event.target.value)}
        min={0}
        max={1000}
        step={100}
      />
    </StyledHeader>
  );
}

export default Header;
