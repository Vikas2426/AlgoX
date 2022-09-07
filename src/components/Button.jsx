/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import StyledButton from './styles/StyledButton.styled';

function Button({ name, clickHandler, disabled }) {
  return (
    <StyledButton onClick={clickHandler} name={name} disabled={disabled}>{name}</StyledButton>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  name: 'button',
  clickHandler: () => {
    // default prop
  },
};

export default Button;
