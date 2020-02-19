import React, {Component} from 'react';

class ProjectTask extends Component {
    render() {
        const {project_task} = this.props;
        let priorityString;
        let priorityClass;

        if (project_task.priority === 1) {
            priorityClass = "bg-high";
            priorityString = "HIGH";
        }

        if (project_task.priority === 2) {
            priorityClass = "bg-medium";
            priorityString = "MEDIUM";
        }

        if (project_task.priority === 3) {
            priorityClass = "bg-low";
            priorityString = "LOW";
        }

        return (

            <div className={`card mb-1 bg-dark ${priorityClass}`}>
                <div className={"card-header"}>
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

                    <button className="btn danger-button ml-3">
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default ProjectTask;