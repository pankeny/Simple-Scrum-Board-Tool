import React, {Component} from 'react';

class AddProjectTask extends Component {
    render() {
        return (
            <div className="container-fluid mt-3">
                <h2>New project</h2>
                <hr/>
                <div className="container new-proj-container mt-5">
                    <div className="container m-5 m-auto p-4">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" name="summary"
                                       placeholder="Project Task summary"/>
                            </div>
                            <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria"
                                              name="acceptanceCriteria"/>
                            </div>
                            <h6>Due Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" name="dueDate"/>
                            </div>
                            <div className="form-group">
                                <select className="form-control form-control-lg" name="priority">
                                    <option value={0}>Select Priority</option>
                                    <option value={1}>High</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>Low</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <select className="form-control form-control-lg" name="status">
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

export default AddProjectTask;