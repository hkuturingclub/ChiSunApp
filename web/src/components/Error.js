import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const Error = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
    <p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </p>
  </div>
);

Error.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Error.defaultProps = {
  title: "Uh oh",
  content: "An unexpected error came up",
};

export default Error;
