import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid mt-3">
        <h2>Projects</h2>
        <div className="new-project-section m-3">
          <CreateProjectButton />
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
