import React, {Component} from 'react';
import AddProjectTaskButton from "./ProjectTasks/AddProjectTaskButton";

class ProjectBoard extends Component {
    render() {
        return (
            <div className="container-fluid mt-3">
                {
                    //<!-- Backlog STARTS HERE -->
                }
                <h2>Project Board</h2>
                <div className="new-project-section m-3">
                    <AddProjectTaskButton id={this.props.match.params}/>
                    <hr/>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="col-header my-2">
                                <p>TODO</p>
                            </div>

                            {
                                //!-- SAMPLE PROJECT TASK STARTS HERE --
                            }
                            <div className="card mb-1 bg-dark">

                                <div className="card-header button-text">
                                    ID: projectSequence -- Priority: priorityString
                                </div>
                                <div className="card-body bg-dark">
                                    <h5 className="card-title">project_task.summary</h5>
                                    <p className="card-text text-truncate ">
                                        project_task.acceptanceCriteria
                                    </p>
                                    <a href="#" className="btn project-button">
                                        Update
                                    </a>

                                    <button className="btn btn-danger ml-4">
                                        Delete
                                    </button>
                                </div>
                            </div>
                            {
                                //<!-- SAMPLE PROJECT TASK ENDS HERE -->
                            }
                        </div>
                        <div className="col-md-4">
                            <div className="col-header my-2">
                                <p>In Progress</p>
                            </div>
                            <div className="card mb-1 bg-dark">

                                <div className="card-header button-text">
                                    ID: projectSequence -- Priority: priorityString
                                </div>
                                <div className="card-body bg-dark">
                                    <h5 className="card-title">project_task.summary</h5>
                                    <p className="card-text text-truncate ">
                                        project_task.acceptanceCriteria
                                    </p>
                                    <a href="#" className="btn project-button">
                                        Update
                                    </a>

                                    <button className="btn btn-danger ml-4">
                                        Delete
                                    </button>
                                </div>
                            </div>
                            {
                                //<!-- SAMPLE PROJECT TASK STARTS HERE -->
                                //<!-- SAMPLE PROJECT TASK ENDS HERE --

                            }

                        </div>
                        <div className="col-md-4">
                            <div className="col-header my-2">
                                <p>Done</p>
                            </div>
                            <div className="card mb-1 bg-dark">

                                <div className="card-header button-text">
                                    ID: projectSequence -- Priority: priorityString
                                </div>
                                <div className="card-body bg-dark">
                                    <h5 className="card-title">project_task.summary</h5>
                                    <p className="card-text text-truncate ">
                                        project_task.acceptanceCriteria
                                    </p>
                                    <a href="#" className="btn project-button">
                                        Update
                                    </a>

                                    <button className="btn btn-danger ml-4">
                                        Delete
                                    </button>
                                </div>
                            </div>
                            {
                                // <!-- SAMPLE PROJECT TASK STARTS HERE -->
                                // <!-- SAMPLE PROJECT TASK ENDS HERE -->
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectBoard;