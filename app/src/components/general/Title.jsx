import propTypes from "prop-types";

function Title({ text, classes }) {
  return <h1 className={`font-bold text-4xl text-black ${classes}`}>{text}</h1>;
}

Title.propTypes = {
  text: propTypes.string,
  classes: propTypes.string,
};

export default Title;
