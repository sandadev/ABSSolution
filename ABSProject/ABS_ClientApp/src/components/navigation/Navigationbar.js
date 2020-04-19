import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from "react-bootstrap";
import { userActions } from '../../actions'
import { connect } from "react-redux";


class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarExists: false
        };
    }

    mobileSidebarToggle = (e) => {
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

    getTitle = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        return user.firstName;
    }

    logout = () => {
        const { dispatch } = this.props;
        this.props.logout();
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
                            title={this.getTitle()}
                            id="basic-nav-dropdown-right"
                        >
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Change Password</MenuItem>
                            <MenuItem divider />
                            <MenuItem onClick={() => this.logout()} >Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        );
    }
}

const actionCreators = {
    logout: userActions.logout
}

export default connect('', actionCreators)(NavigationBar);
