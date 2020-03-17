import React, {Component} from 'react';
import classnames from "classnames";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../actions/securityActions";
import PropTypes from "prop-types";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            "username": "",
            "password": "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
        const LoginRequest = {
            "username": this.state.username,
            "password": this.state.password
        }

        this.props.login(LoginRequest)
    }

    render() {
        const {errors} = this.state;
        return (
                <div className="container new-proj-container mt-5">
                    <div className="container cont-test m-auto p-4">
                        <h2>Sign in</h2>
                        <form className={"my-4"} onSubmit={this.onSubmit}>
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

                            <a>Don't have account already? </a><Link className="link-text" to="/register">Sign
                            up!</Link>

                            <input
                                type="submit"
                                className="btn btn-md project-button btn-block mt-3"
                                value="Sign in"
                            />
                        </form>
                    </div>
                </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {login})(Login);