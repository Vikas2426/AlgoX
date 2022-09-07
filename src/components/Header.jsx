/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useState } from 'react';
import constants, { buttonTypes } from '../lib/constants';
import { SortingContext } from '../SortingContext/SortingProvider';
import Button from './Button';
import StyledHeader from './styles/StyledHeader.styled';
import buttonActions from '../lib/buttonActions';

function Header() {
  const {
    setDelay, delay, heights, setArrayLength, arrayLength,
  } = useContext(SortingContext);

  const [shouldBeDisabled, setShouldBeDisabled] = useState(false);
  const handleAlgoSelection = (event) => {
    const buttonType = event.target.name;
    setShouldBeDisabled(buttonType !== buttonTypes.RESET_ARRAY);
    buttonActions(buttonType, heights, delay);
  };
  return (
    <StyledHeader>
      <div>
        {Object.values(buttonTypes).map((buttonType) => (
          <Button
            key={buttonType}
            name={buttonType}
            disabled={buttonType !== buttonTypes.RESET_ARRAY ? shouldBeDisabled : !shouldBeDisabled}
            clickHandler={handleAlgoSelection}
          />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
        <label htmlFor="delay" style={{ color: 'white' }}>
          Delay:&nbsp;
          {delay}
          ms
        </label>
        <input
          type="range"
          name="delay"
          defaultValue={constants.MIN_DELAY}
          onChange={(event) => setDelay(event.target.value)}
          min={0}
          max={1000}
          step={10}
          disabled={shouldBeDisabled}
        />
        <label htmlFor="arrayLength" style={{ color: 'white' }}>
          Bars:&nbsp;
          {arrayLength}
        </label>
        <input
          type="range"
          name="arrayLength"
          defaultValue={constants.DEFAULT_NO_OF_BARS}
          onChange={(event) => setArrayLength(event.target.value)}
          min={10}
          max={constants.DEFAULT_NO_OF_BARS}
          step={20}
          disabled={shouldBeDisabled}
        />
      </div>
    </StyledHeader>
  );
}

export default Header;
