import PropTypes from 'prop-types';

const style = {
  width: '1em',
  backgroundColor: 'turquoise',
  margin: '0.5em',
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
