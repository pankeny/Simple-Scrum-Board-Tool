import React, {Component} from "react";

import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,
} from "reactstrap";

import brand from "../../assets/logo.png";
import add_project from "../../assets/add-project-24.png";
import projects from "../../assets/projects-filled-24.png";
import profile from "../../assets/icons8-name-filled-24.png";
import logoutImg from "../../assets/logout-black-24.png";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../../actions/securityActions";
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout() {
        this.props.logout();
        window.location.href = "/login";
    }

    render() {
        const {validToken, user} = this.props.security;
        const userIsAuthenticated = (
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/addProject">
                            <img src={add_project} className="mx-2" alt="new project"/>
                            New Project
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/dashboard">
                            <img src={projects} className="mx-2" alt="projects"/>
                            Projects
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            <img src={profile} className="mx-2" alt="profile"/>
                            {user.fullName}
                        </DropdownToggle>
                        <DropdownMenu className="drop-down-m drop-menu" right>
                            <DropdownItem className="drop-action">
                                <a className="link-text" onClick={this.logout.bind(this)}>
                                    <img src={logoutImg} className="mx-1" alt="logout"/>
                                    Logout
                                </a>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        );

        return (
            <div className="App-header">
                <Navbar className="navbar" dark expand="md">
                    <img src={brand} className="mx-2" alt="logo"/>
                    <NavbarBrand href="/">SSBT</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    {validToken ? userIsAuthenticated : ""}
                </Navbar>
            </div>
        );
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(mapStateToProps, {logout})(Header);
