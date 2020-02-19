import React, {Component} from 'react';

class ProjectTask extends Component {
    render() {
        const {project_task} = this.props;
        let priorityString;
        let priorityClass;

        if (project_task.priority === 1) {
            priorityClass = "bg-danger";
            priorityString = "HIGH";
        }

        if (project_task.priority === 2) {
            priorityClass = "bg-warning";
            priorityString = "MEDIUM";
        }

        if (project_task.priority === 3) {
            priorityClass = "bg-info";
            priorityString = "LOW";
        }

        return (

            // Todo - define css class for priority that changes border color of card (not header bg like now)
            <div className="card mb-1 bg-dark">
                <div className={`card-header ${priorityClass}`}>
                    ID: {project_task.projectSequence} -- Priority: {priorityString}
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