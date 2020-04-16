
import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from "react-bootstrap";


class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
        this.state = {
            sidebarExists: false
        };
    }
    mobileSidebarToggle(e) {
        if (this.state.sidebarExists === false) {
            this.setState({
                sidebarExists: true
            });
        }
        e.preventDefault();
        document.documentElement.classList.toggle("nav-open");
        var node = document.createElement("div");
        node.id = "bodyClick";
        node.onclick = function () {
            this.parentElement.removeChild(this);
            document.documentElement.classList.toggle("nav-open");
        };
        document.body.appendChild(node);
    }

    render() {
        const notification = (
            <div>
                <i className="fa fa-globe" />
                <b className="caret" />
                <span className="notification">5</span>
                <p className="hidden-lg hidden-md">Notification</p>
            </div>
        )
        return (
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#pablo">{this.props.brandText}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={this.mobileSidebarToggle} />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown
                            eventKey={2}
                            title="Dropdown"
                            id="basic-nav-dropdown-right"
                        >
                            <MenuItem eventKey={2.1}>Action</MenuItem>
                            <MenuItem eventKey={2.2}>Another action</MenuItem>
                            <MenuItem eventKey={2.3}>Something</MenuItem>
                            <MenuItem eventKey={2.4}>Another action</MenuItem>
                            <MenuItem eventKey={2.5}>Something</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.5}>Separated link</MenuItem>
                        </NavDropdown>
                        <NavItem href="/login">Log out </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;
