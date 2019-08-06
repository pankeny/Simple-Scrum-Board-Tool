import React, { Component } from "react";
import { Button, Row, Col } from "reactstrap";
import avatar from "../../assets/yoda.png";

class ProjectItem extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className="project-item container-fluid mx-auto mt-4">
        <Row>
          <Col lg={{ size: 2 }} className="project-user my-auto">
            <img src={avatar} alt="user avatar" />
            <p className="d-block ml-4">Username</p>
          </Col>
          <Col lg={{ size: 6 }} className="justify-text">
            <p className="project-title">{project.projectName}</p>
            <p>{project.projectIdentifier}</p>
          </Col>
          <Col lg={{ size: 3, offset: 1 }} className="project-buttons">
            {" "}
            <Button className="project-button d-block my-2 ml-auto">
              {" "}
              <span>Project Board</span>
            </Button>{" "}
            <Button className="project-button d-block my-2 ml-auto">
              {" "}
              <span>Update Project</span>
            </Button>{" "}
            <Button className="project-button d-block my-2 ml-auto">
              {" "}
              <span>Delete Project</span>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProjectItem;
