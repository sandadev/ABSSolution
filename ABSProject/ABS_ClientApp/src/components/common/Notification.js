// import { style } from "variables/Variables.jsx";
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationSystem from 'react-notification-system';
import {notificationActions} from '../../actions';
 
class Notification extends Component {
 
  constructor(props) {
    super(props);
  }
 
  componentDidMount() {
    this.notificationSystem = this.refs.notificationSystem;
  }
 
  componentWillReceiveProps(newProps) {
    const { message, level } = newProps.notification;
    this.notificationSystem.addNotification({
      message,
      level
    });
  }
 
  render() {
    return (
      <NotificationSystem ref="notificationSystem" />
    );
  }
}
 
function mapStateToProps(state) {
  return {
    notification: state.notification
  };
}
 
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      notificationActions
    }, dispatch)
  };
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
