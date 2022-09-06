/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useState } from 'react';
import buttonTypes from '../lib/buttonTypes';
import { SortingContext } from '../SortingContext/SortingProvider';
import Button from './Button';
import StyledHeader from './styles/StyledHeader.styled';

function Header() {
  const { buttonActions, setDelay, delay } = useContext(SortingContext);
  const [shouldBeDisabled, setShouldBeDisabled] = useState(false);
  const handleAlgoSelection = (event) => {
    const buttonType = event.target.name;
    setShouldBeDisabled(buttonType !== buttonTypes.RESET_ARRAY);
    buttonActions(buttonType);
  };
  return (
    <StyledHeader>
      <div>
        {Object.values(buttonTypes).map((buttonType) => (
          <Button
            key={buttonType}
            name={buttonType}
            disabled={buttonType !== buttonTypes.RESET_ARRAY && shouldBeDisabled}
            clickHandler={handleAlgoSelection}
          />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="delay" style={{ color: 'white' }}>
          Delay:
          {delay}
          ms
        </label>
        <input
          type="range"
          name="delay"
          defaultValue={10}
          onChange={(event) => setDelay(event.target.value)}
          min={10}
          max={1000}
          step={100}
          disabled={shouldBeDisabled}
        />
      </div>
    </StyledHeader>
  );
}

export default Header;
