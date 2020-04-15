
import React, { Component } from "react";
import { Navbar, NavItem, Nav, NavDropdown } from "react-bootstrap";


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
            </div>)
        return (
            // <Navbar fluid>
            //     <Navbar.Header>
            //         <Navbar.Brand>
            //             <a href="#pablo">{this.props.brandText}</a>
            //         </Navbar.Brand>
            //         <Navbar.Toggle onClick={this.mobileSidebarToggle} />
            //     </Navbar.Header>

            // </Navbar>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;
