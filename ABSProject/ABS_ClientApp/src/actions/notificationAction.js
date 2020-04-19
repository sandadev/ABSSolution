import { notificationConstants } from '../constants';

export const notificationActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: notificationConstants.SUCCESS, message };
}

function error(message, level) {
    return { type: notificationConstants.ERROR, message };
}

function clear() {
    return { type: notificationConstants.CLEAR };
}