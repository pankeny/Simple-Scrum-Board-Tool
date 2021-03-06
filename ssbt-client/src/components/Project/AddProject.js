import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import classnames from "classnames";

class AddProject extends Component {
  constructor() {
    super();

    this.state = {
      projectName: "",
      projectIdentifier: "",
      description: "",
      start_date: "",
      end_date: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.errors) {
      this.setState({ errors: props.errors });
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date
    };
    this.props.createProject(newProject, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container-fluid mt-3">
        <h2>New project</h2>
        <hr />
        <div className="container new-proj-container mt-5">
          <div className="container m-5 m-auto p-4">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg ", {
                    "input-error": errors.projectName
                  })}
                  placeholder="Project Name"
                  name="projectName"
                  value={this.state.projectName}
                  onChange={this.onChange}
                />
                {errors.projectName && (
                  <div className="error-text">{errors.projectName}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "input-error": errors.projectIdentifier
                  })}
                  placeholder="Unique Project ID"
                  name="projectIdentifier"
                  value={this.state.projectIdentifier}
                  onChange={this.onChange}
                />
                {errors.projectIdentifier && (
                  <div className="error-text">{errors.projectIdentifier}</div>
                )}
              </div>

              <div className="form-group">
                <textarea
                  className={classnames("form-control form-control-lg", {
                    "input-error": errors.description
                  })}
                  placeholder="Project Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                />
                {errors.description && (
                  <div className="error-text">{errors.description}</div>
                )}
              </div>
              <h6>Start Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="start_date"
                  value={this.state.start_date}
                  onChange={this.onChange}
                />
              </div>
              <h6>Estimated End Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="end_date"
                  value={this.state.end_date}
                  onChange={this.onChange}
                />
              </div>

              <input
                type="submit"
                className="btn btn-md project-button btn-block mt-5"
                value="Create"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProject }
)(AddProject);
