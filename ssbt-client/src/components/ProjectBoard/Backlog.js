import React, {Component} from 'react';
import ProjectTask from "./ProjectTasks/ProjectTask";

class Backlog extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="col-header my-2">
                        <p>TODO</p>
                    </div>
                    <ProjectTask/>
                    {
                        //!-- SAMPLE PROJECT TASK STARTS HERE --
                    }

                    {
                        //<!-- SAMPLE PROJECT TASK ENDS HERE -->
                    }
                </div>
                <div className="col-md-4">
                    <div className="col-header my-2">
                        <p>In Progress</p>
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

                    {
                        // <!-- SAMPLE PROJECT TASK STARTS HERE -->
                        // <!-- SAMPLE PROJECT TASK ENDS HERE -->
                    }

                </div>
            </div>
        );
    }
}

export default Backlog;