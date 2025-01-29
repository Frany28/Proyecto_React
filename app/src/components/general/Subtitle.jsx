import propTypes from "prop-types";

function Subtitle({ text = "", classes = "" }) {
  return <h2 className={`text-2xl font-bold ${classes}`}>{text}</h2>;
}

Subtitle.propTypes = {
  text: propTypes.string,
  classes: propTypes.string,
};

export default Subtitle;
