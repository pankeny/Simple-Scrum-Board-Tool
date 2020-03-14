import React, {Component} from 'react';
import classnames from "classnames";
import {Link} from "react-router-dom";

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            "fullname": "",
            "username": "",
            "password": "",
            "rePassword": "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {

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
                                    "input-error": errors.projectName
                                })}
                                placeholder="Full name"
                                name="fullName"
                                value={this.state.fullName}
                                onChange={this.onChange}
                            />
                            {errors.projectName && (
                                <div className="error-text">{errors.projectName}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={classnames("form-control form-control-lg ", {
                                    "input-error": errors.projectName
                                })}
                                placeholder="Email"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChange}
                            />
                            {errors.projectName && (
                                <div className="error-text">{errors.projectName}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className={classnames("form-control form-control-lg", {
                                    "input-error": errors.projectIdentifier
                                })}
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                            {errors.projectIdentifier && (
                                <div className="error-text">{errors.projectIdentifier}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className={classnames("form-control form-control-lg", {
                                    "input-error": errors.projectIdentifier
                                })}
                                placeholder="Repeat password"
                                name="rePassword"
                                value={this.state.rePassword}
                                onChange={this.onChange}
                            />
                            {errors.projectIdentifier && (
                                <div className="error-text">{errors.projectIdentifier}</div>
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

export default Register;