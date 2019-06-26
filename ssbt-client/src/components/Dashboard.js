import React, { Component } from "react";
import { Button } from "reactstrap";

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid mt-3">
        <h2>Projects</h2>
        <div className="new-project-section mx-5">
          <Button className="new-project-button ">
            {" "}
            <span>New Project</span>
          </Button>
          <hr />
        </div>

        <div className="container project-item m-4">
          <p>test</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
