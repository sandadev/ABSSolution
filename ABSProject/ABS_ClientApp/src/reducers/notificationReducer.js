import { notificationConstants } from '../constants';

export function notification(state = {}, action) {
    switch (action.type) {
        case notificationConstants.SUCCESS:
            return Object.assign({}, state, {
                type: 'notification-success',
                message: action.message,
                level: 'success'
            });
        case notificationConstants.ERROR:
            return {
                type: 'notification-danger',
                message: action.message,
                level: 'error'
            };
        case notificationConstants.CLEAR:
            return {};
        default:
            return state
    }
}