import PropTypes from "prop-types";

const Title = ({ name, type }) => {
  return <h1 style={{ fontWeight: type }}>Hello! {name}</h1>;
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Title.defaultProps = {
  type: "normal",
};

export default Title;
