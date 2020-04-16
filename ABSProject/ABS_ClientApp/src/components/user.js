import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import routes from '../routes';
import Sidebar from './navigation/Sidebar';
import NavigationBar from './navigation/Navigationbar';

export class User extends Component {
    componentDidUpdate(e) {
        // if (
        //     window.innerWidth < 993 &&
        //     e.history.location.pathname !== e.location.pathname &&
        //     document.documentElement.className.indexOf("nav-open") !== -1
        // ) {
        //     document.documentElement.classList.toggle("nav-open");
        // }
        // if (e.history.action === "PUSH") {
        //     document.documentElement.scrollTop = 0;
        //     document.scrollingElement.scrollTop = 0;
        //     this.refs.mainPanel.scrollTop = 0;
        // }
    }
    getBrandText = path => {
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    };
    getRoutes = routes => {
        return routes.map((prop, key) => {
            return (
                <Route
                    path={prop.path}
                    render={props => (<prop.component  {...props} />)}
                    key={key}
                />
            );
        });
    };
    render() {
        return (
            <div className="wrapper">
                <Sidebar {...this.props} routes={routes} />
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <NavigationBar {...this.props} brandText={this.getBrandText(this.props.location.pathname)} />
                    <Switch>{this.getRoutes(routes)}</Switch>
                </div>
            </div>
        )
    }
}

export default User
