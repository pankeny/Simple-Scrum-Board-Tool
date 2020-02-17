import React, {Component} from 'react';
import AddProjectTaskButton from "./ProjectTasks/AddProjectTaskButton";
import Backlog from "./Backlog";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../../actions/backlogActions";

class ProjectBoard extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getBacklog(id)
    }

    render() {

        const {project_tasks} = this.props.backlog;

        return (
            <div className="container-fluid mt-3">
                {
                    //<!-- Backlog STARTS HERE -->
                }
                <h2>Project Board</h2>
                <div className="new-project-section m-3">
                    <AddProjectTaskButton id={this.props.match.params}/>
                    <hr/>
                    <Backlog project_tasks_prop={project_tasks}/>
                </div>
            </div>
        );
    }
}

ProjectBoard.propTypes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    backlog: state.backlog
});


export default connect(mapStateToProps, {getBacklog})(ProjectBoard);