import React, { Component } from "react";
import { Button, Row, Col } from "reactstrap";
import avatar from "../../assets/yoda.png";

class ProjectItem extends Component {
  render() {
    return (
      <div className="project-item container-fluid mx-auto mt-4">
        <Row>
          <Col lg={{ size: 2 }} className="project-user my-auto">
            <img src={avatar} alt="user avatar" />
            <p className="d-block ml-4">Username</p>
          </Col>
          <Col lg={{ size: 6 }} className="justify-text">
            <p className="project-title">Example Project</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              suscipit auctor ligula non condimentum. Fusce nec arcu nec lorem
              consequat vulputate. Aliquam quis vestibulum sem, nec venenatis
              mi. Ut imperdiet vel mi vitae congue. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos. Sed
              luctus nisi vitae augue tempus, feugiat malesuada urna
              condimentum. Suspendisse at rutrum magna. Integer accumsan viverra
              urna nec iaculis.
            </p>
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
