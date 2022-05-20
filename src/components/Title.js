import PropTypes from "prop-types";

const Title = ({ name, type = "normal" }) => {
  return <h1 style={{ fontWeight: type }}>Hello! {name}</h1>;
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Title;
