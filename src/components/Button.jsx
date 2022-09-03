import PropTypes from 'prop-types';
import StyledButton from './styles/StyledButton.styled';

function Button({ name, clickHandler }) {
  return (
    <StyledButton onClick={clickHandler}>{name}</StyledButton>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: 'button',
  clickHandler: () => {
    // default prop
  },
};

export default Button;
