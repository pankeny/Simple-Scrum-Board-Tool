import React from "react";
import { Link } from "react-router-dom";

const CreateProjectButton = () => {
  return (
    <React.Fragment>
      <Link to="/addProject" className="btn btn-md project-button">
        New Project
      </Link>
    </React.Fragment>
  );
};

export default CreateProjectButton;
