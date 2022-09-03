import PropTypes from 'prop-types';

const style = {
  padding: '1em',
  background: 'linear-gradient(to left, #fdc830, #f37335)',
  margin: '0.5em',
  border: '0.5px solid #26aaab',
  boxShadow: '2px 2px 5px lightgrey',
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
