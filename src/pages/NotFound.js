import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h3>Page not found!</h3>
      <Link to="/">
        <span>back to homepage</span>
        <span className="close-search"></span>
      </Link>
    </div>
  );
};

export default NotFound;
