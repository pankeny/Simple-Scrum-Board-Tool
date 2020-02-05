import React, {Component} from 'react';
import AddProjectTaskButton from "./ProjectTasks/AddProjectTaskButton";
import Backlog from "./Backlog";

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
                    <Backlog/>
                </div>
            </div>
        );
    }
}

export default ProjectBoard;