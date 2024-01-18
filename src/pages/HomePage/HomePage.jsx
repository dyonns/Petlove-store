import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>HOMEPage</h1>
      <Link to={`/login`}>login</Link>
    </>
  );
};
export default HomePage;
