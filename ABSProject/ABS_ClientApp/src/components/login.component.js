import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions'
import './login.css'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            user: { email: '', password: '' },
            errors: { emailError: '', passwordError: '' }
        };
    }

    handleChange = (e) => {
        let user = this.state.user;
        user[e.target.name] = e.target.value;
        this.setState({ user });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            const { email, password } = this.state.user;
            const { dispatch } = this.props;
            dispatch(userActions.login(email, password));
        }

    }

    validateForm() {

        let user = this.state.user;
        let errors = this.state.errors;
        let formIsValid = true;
        //regular expression for email validation
        var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!user["email"]) {
            formIsValid = false;
            errors["emailError"] = "Please enter your email-ID.";
        } else if (typeof user["email"] !== "undefined" && !emailPattern.test(user["email"])) {
            formIsValid = false;
            errors["emailError"] = "Please enter valid email-ID.";
        }

        if (!user["password"]) {
            formIsValid = false;
            errors["passwordError"] = "Please enter your password.";
        } else if (typeof user["password"] !== "undefined" && !user["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["passwordError"] = "Please enter secure and strong password.";

        }
        this.setState({
            errors: errors
        });
        return formIsValid;
    }


    render() {
        const { loggingIn } = this.props;
        const { email, password } = this.state.user;
        const { emailError, passwordError } = this.state.errors;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h1 className="login-title">Asian Software</h1>
                        <div className="col-md-6 col-md-offset-3">
                            <h2>Login</h2>
                            <form name="form" noValidate onSubmit={this.handleSubmit}>
                                <div className={'form-group' + (emailError ? ' has-error' : '')}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" required className="form-control" name="email" value={email} onChange={this.handleChange} />
                                    {emailError &&
                                        <div className="help-block">{emailError}</div>
                                    }
                                </div>
                                <div className={'form-group' + (passwordError ? ' has-error' : '')}>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" required className="form-control" name="password" value={password} onChange={this.handleChange} />
                                    {passwordError &&
                                        <div className="help-block">{passwordError}</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Login</button>
                                    {loggingIn &&
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                    <Link to="/register" className="btn btn-link">Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(LoginPage); 