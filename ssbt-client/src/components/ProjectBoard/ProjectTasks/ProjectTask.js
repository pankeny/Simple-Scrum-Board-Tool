import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ProjectTask extends Component {
    render() {
        const {project_task} = this.props;
        let priorityString;
        let priorityClass;

        if (project_task.priority === 1) {
            priorityClass = "border-high";
            priorityString = "HIGH";
        }

        if (project_task.priority === 2) {
            priorityClass = "border-medium";
            priorityString = "MEDIUM";
        }

        if (project_task.priority === 3) {
            priorityClass = "border-low";
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
                    <Link
                        to={`/updateProjectTask/${project_task.projectIdentifier}/${project_task.projectSequence}`}
                        className="btn project-button">
                        Update
                    </Link>

                    <button className="btn danger-button ml-3">
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default ProjectTask;