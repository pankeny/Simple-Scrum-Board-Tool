import React, { Component } from "react";
import {Link} from "react-router-dom";


class AddProjectTaskButton extends Component {
    render() {
        const { id } = this.props.id;

        return (
            <React.Fragment>
                <Link to={`/addProjectTask/${id}`} className="btn btn-md project-button">
                    New Project Task
                </Link>
            </React.Fragment>
        );
    }
}

export default AddProjectTaskButton;
