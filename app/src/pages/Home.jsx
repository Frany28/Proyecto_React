import propTypes from "prop-types";

function Home() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}

Home.propTypes = {
  text: propTypes.string,
  classes: propTypes.string,
};
export default Home;
