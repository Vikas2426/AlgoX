import PropTypes from 'prop-types';
import constants from '../lib/constants';

const style = {
  background: constants.originalColor,
  boxShadow: '2px 2px 5px lightgrey',
  transition: 'height 0.1s ease-in',
  fontSize: '0.8em',
  margin: '0px 2px',
  padding: '2px',
};

function Bar({ height }) {
  return (
    <span className="bars" style={{ ...style, height }} />
  );
}

Bar.propTypes = {
  height: PropTypes.string.isRequired,
};

export default Bar;
