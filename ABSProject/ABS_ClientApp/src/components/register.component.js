import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                mobileNo: ''
            },
            error: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                mobileNo: ''
            }
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { user } = this.state;
        if (this.validateForm()) {
            this.props.register(user);
        }
    }

    validateForm() {

        let { user, error } = this.state;
        let formIsValid = true;
        //regular expression for email validation
        var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!user["email"]) {
            formIsValid = false;
            error["email"] = "Please enter your email-ID.";
        } else if (typeof user["email"] !== "undefined" && !emailPattern.test(user["email"])) {
            formIsValid = false;
            error["email"] = "Please enter valid email-ID.";
        }

        if (!user["firstName"]) {
            formIsValid = false;
            error["firstName"] = "Please enter your first name";
        }

        if (!user["lastName"]) {
            formIsValid = false;
            error["lastName"] = "Please enter your last name";
        }

        if (!user["password"]) {
            formIsValid = false;
            error["password"] = "Please enter your password.";
        } else if (typeof user["password"] !== "undefined" && !user["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            error["password"] = "Please enter secure and strong password.";
        }

        if (!user["mobileNo"]) {
            formIsValid = false;
            error["mobileNo"] = "Please enter your mobile no.";
        } else if (typeof user["mobileno"] !== "undefined" && !user["mobileno"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            error["mobileNo"] = "Please enter valid mobile no.";
        }
        this.setState({
            error: error
        });
        return formIsValid;
    }

    render() {
        const { registering } = this.props;
        const { user, error } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (error.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                        {error.firstName &&
                            <div className="help-block">{error.firstName}</div>
                        }
                    </div>
                    <div className={'form-group' + (error.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                        {!user.lastName &&
                            <div className="help-block">{error.lastName}</div>
                        }
                    </div>
                    <div className={'form-group' + (error.email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                        {error.email &&
                            <div className="help-block">{error.email} </div>
                        }
                    </div>

                    <div className={'form-group' + (error.mobileNo ? ' has-error' : '')}>
                        <label htmlFor="mobileNo">Mobile No</label>
                        <input type="mobileNo" className="form-control" name="mobileNo" value={user.mobileNo} onChange={this.handleChange} />
                        {error.mobileNo &&
                            <div className="help-block">{error.mobileNo} </div>
                        }
                    </div>

                    <div className={'form-group' + (error.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {error.password &&
                            <div className="help-block">{error.password} </div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {registering &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.register;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

export default connect(mapState, actionCreators)(RegistrationPage);
