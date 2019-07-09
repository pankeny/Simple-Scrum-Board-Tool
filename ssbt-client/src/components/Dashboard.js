import React, { Component } from "react";
import { Button } from "reactstrap";
import ProjectItem from "./Project/ProjectItem";

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid mt-3">
        <h2>Projects</h2>
        <div className="new-project-section m-3">
          <Button className="project-button ">
            {" "}
            <span>New Project</span>
          </Button>
          <hr />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    );
  }
}

export default Dashboard;
