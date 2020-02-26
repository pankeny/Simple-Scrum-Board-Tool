import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";
import {getProjectTask} from "../../../actions/backlogActions";
import {connect} from "react-redux";

class UpdateProjectTask extends Component {

    componentDidMount() {
        const {backlog_id, pt_id} = this.props.match.params;
        this.props.getProjectTask(backlog_id, pt_id, this.props.history)
    }

    render() {
        return (
            <div className="container-fluid mt-3">
                <h2>Update project task</h2>
                <hr/>
                <div className="container new-proj-container mt-5">
                    <div className="container m-5 m-auto p-4">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text"
                                       className={classnames("form-control form-control-lg", {
                                           // "input-error": errors.summary
                                       })}
                                       name="summary"
                                       placeholder="Project Task summary"
                                    // value={this.state.summary}
                                       onChange={this.onChange}/>
                                {
                                    // errors.summary && (
                                    //     <div className="error-text">{errors.summary}</div>
                                    // )
                                }
                            </div>
                            <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria"
                                              name="acceptanceCriteria"
                                        // value={this.state.acceptanceCriteria}
                                              onChange={this.onChange}/>
                            </div>
                            <h6>Due Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" name="dueDate"/>
                            </div>
                            <div className="form-group">
                                <select className="form-control form-control-lg" name="priority"
                                    // value={this.state.priority}
                                        onChange={this.onChange}>
                                    <option value={0}>Select Priority</option>
                                    <option value={1}>High</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>Low</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <select className="form-control form-control-lg" name="status"
                                    // value={this.state.status}
                                        onChange={this.onChange}>
                                    <option value="">Select Status</option>
                                    <option value="TO_DO">TO DO</option>
                                    <option value="IN_PROGRESS">IN PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
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

UpdateProjectTask.propTypes = {
    getProjectTask: PropTypes.func.isRequired,
    project_task: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    project_task: state.backlog.project_task
});

export default connect(mapStateToProps, {getProjectTask})(UpdateProjectTask);