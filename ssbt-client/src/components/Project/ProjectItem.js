import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import avatar from "../../assets/yoda.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from "../../actions/projectActions";

class ProjectItem extends Component {
  onDeleteClick = id => {
    this.props.deleteProject(id);
  };

  render() {
    const { project } = this.props;
    return (
      <div className="project-item container-fluid mx-auto mt-4">
        <Row>
          <Col lg={{ size: 2 }} className="project-user my-auto">
            <img src={avatar} alt="user avatar" />
            <p className="d-block ml-4">{project.projectIdentifier}</p>
          </Col>
          <Col lg={{ size: 6 }} className="justify-text">
            <p className="project-title">{project.projectName}</p>
            <p>{project.description}</p>
          </Col>
          <Col lg={{ size: 3, offset: 1 }} className="project-buttons">
            {" "}
            <Link
              to={`/projectBoard/${project.projectIdentifier}`}
              className="btn btn-md project-button d-block my-2 ml-auto"
            >
              Project Board
            </Link>{" "}
            <Link
              to={`/updateProject/${project.projectIdentifier}`}
              className="btn btn-md project-button d-block my-2 ml-auto"
            >
              Update Project
            </Link>{" "}
            <Link
              onClick={this.onDeleteClick.bind(this, project.projectIdentifier)}
              className="btn btn-md danger-button d-block my-2 ml-auto"
            >
              Delete Project
            </Link>{" "}
          </Col>
        </Row>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  deleteProject: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteProject }
)(ProjectItem);
