import React, { Component } from "react";

export default class UpdateProject extends Component {
  render() {
    return (
      <div className="container-fluid mt-3">
        <h2>Update project</h2>
        <hr />
        <div className="container new-proj-container mt-5">
          <div className="container m-5 m-auto p-4">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg "
                  placeholder="Project Name"
                  name="projectName"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Unique Project ID"
                  name="projectIdentifier"
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Project Description"
                  name="description"
                />
              </div>
              <h6>Start Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="start_date"
                />
              </div>
              <h6>Estimated End Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="end_date"
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
