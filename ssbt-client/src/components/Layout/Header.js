import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import brand from "../../assets/logo.png";
import add_project from "../../assets/add-project-24.png";
import projects from "../../assets/projects-filled-24.png";
import profile from "../../assets/icons8-name-filled-24.png";

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

  render() {
    return (
      <div>
        <Navbar className="navbar" dark expand="md">
          <img src={brand} className="mx-2" alt="logo" />
          <NavbarBrand href="/">SSBT</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">
                  <img src={add_project} className="mx-2" alt="new project" />
                  New Project
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <img src={projects} className="mx-2" alt="projects" />
                  Projects
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img src={profile} className="mx-2" alt="profile" />
                  Profile
                </DropdownToggle>
                <DropdownMenu className="drop-down-m" right>
                  <DropdownItem>View Profile</DropdownItem>
                  <DropdownItem>Edit Profile</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
