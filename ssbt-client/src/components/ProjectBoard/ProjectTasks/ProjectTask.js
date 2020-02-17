import React, {Component} from 'react';

class ProjectTask extends Component {
    render() {
        const {project_task} = this.props;
        return (
            <div className="card mb-1 bg-dark">
                <div className="card-header button-text">
                    ID: {project_task.projectSequence} -- Priority: {" "}
                    {project_task.priority}
                </div>
                <div className="card-body bg-dark">
                    <h5 className="card-title">{project_task.summary}</h5>
                    <p className="card-text text-truncate ">
                        {project_task.acceptanceCriteria}
                    </p>
                    <a href="#" className="btn project-button">
                        Update
                    </a>

                    <button className="btn btn-danger ml-4">
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default ProjectTask;