import React, {Component} from 'react';
import AddProjectTaskButton from "./ProjectTasks/AddProjectTaskButton";
import Backlog from "./Backlog";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../../actions/backlogActions";

class ProjectBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getBacklog(id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    render() {

        const {project_tasks} = this.props.backlog;
        const {errors} = this.state;

        let BoardContent;

        const boardAlgorithm = (errs, pts) => {
            if(pts.length < 1) {
                if(errs.projectNotFound) {
                    return(
                        <div className="alert alert-danger text-center" role="alert">
                            {errs.projectNotFound}
                        </div>
                    )
                } else {
                    return (
                        <div className="alert alert-info text-center" role="alert">
                            No project tasks on this board
                        </div>
                    )
                }
            } else {
                return <Backlog project_tasks_prop={pts}/>
            }
        };

        BoardContent = boardAlgorithm(errors, project_tasks);

        return (
            <div className="container-fluid mt-3">
                {
                    //<!-- Backlog STARTS HERE -->
                }
                <h2>Project Board</h2>
                <div className="new-project-section m-3">
                    <AddProjectTaskButton id={this.props.match.params}/>
                    <hr/>
                    {BoardContent}
                </div>
            </div>
        );
    }
}

ProjectBoard.propTypes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    backlog: state.backlog,
    errors: state.errors
});


export default connect(mapStateToProps, {getBacklog})(ProjectBoard);