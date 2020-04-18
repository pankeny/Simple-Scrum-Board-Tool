import React, {Component} from 'react';
import classnames from "classnames";
import {Link} from "react-router-dom";
import {createNewUser} from "../../actions/securityActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            "username": "",
            "fullName": "",
            "password": "",
            "confirmPassword": "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            "username": this.state.username,
            "fullName": this.state.fullName,
            "password": this.state.password,
            "confirmPassword": this.state.confirmPassword
        };

        this.props.createNewUser(newUser, this.props.history);
    }

    render() {
        const {errors} = this.state;
        return (
            <div className="container new-proj-container mt-5">
                <div className="container cont-test m-auto p-4">
                    <h2>Register</h2>
                    <form className={"my-4"} onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className={classnames("form-control form-control-lg ", {
                                    "input-error": errors.fullName
                                })}
                                placeholder="Full name"
                                name="fullName"
                                value={this.state.fullName}
                                onChange={this.onChange}
                            />
                            {errors.fullName && (
                                <div className="error-text">{errors.fullName}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={classnames("form-control form-control-lg ", {
                                    "input-error": errors.username
                                })}
                                placeholder="Email"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChange}
                            />
                            {errors.username && (
                                <div className="error-text">{errors.username}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className={classnames("form-control form-control-lg", {
                                    "input-error": errors.password
                                })}
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                            {errors.password && (
                                <div className="error-text">{errors.password}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className={classnames("form-control form-control-lg", {
                                    "input-error": errors.confirmPassword
                                })}
                                placeholder="Repeat password"
                                name="confirmPassword"
                                value={this.state.confirmPassword}
                                onChange={this.onChange}
                            />
                            {errors.confirmPassword && (
                                <div className="error-text">{errors.confirmPassword}</div>
                            )}
                        </div>

                        <a>Already have account? </a><Link className="link-text" to="/login">Sign in!</Link>

                        <input
                            type="submit"
                            className="btn btn-md project-button btn-block mt-3"
                            value="Sign up"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    security: state.security
});

export default connect(mapStateToProps, {createNewUser})(Register);