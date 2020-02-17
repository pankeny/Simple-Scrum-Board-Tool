import React, {Component} from 'react';
import ProjectTask from "./ProjectTasks/ProjectTask";

class Backlog extends Component {
    render() {

        const {project_tasks_prop} = this.props;
        const tasks = project_tasks_prop.map(project_task => (
            <ProjectTask key={project_task.id} project_task={project_task}/>
        ));

        let todoItems = Array.from(tasks.filter(task => task.props.project_task.status === "TO-DO"));
        let inProgressItems = Array.from(tasks.filter(task => task.props.project_task.status === "IN_PROGRESS"));
        let doneItems = Array.from(tasks.filter(task => task.props.project_task.status === "DONE"));

        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="col-header my-2">
                        <p>TODO</p>
                    </div>
                    {todoItems}
                    <div className="col-md-4">
                </div>
                    <div className="col-header my-2">
                        <p>In Progress</p>
                    </div>

                    {inProgressItems}

                </div>
                <div className="col-md-4">
                    <div className="col-header my-2">
                        <p>Done</p>
                    </div>

                    {doneItems}

                </div>
            </div>
        );
    }
}

export default Backlog;