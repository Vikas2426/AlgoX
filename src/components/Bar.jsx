import PropTypes from 'prop-types';

const style = {
  background: 'grey',
  border: '0.5px solid #26aaab',
  boxShadow: '2px 2px 5px lightgrey',
  transition: 'height 0.5s ease-in',
  fontSize: '0.8em',
};

function Bar({ height }) {
  return (
    <span className="bars" style={{ ...style, height }}>
      {height}
    </span>
  );
}

Bar.propTypes = {
  height: PropTypes.string.isRequired,
};

export default Bar;
