import { combineReducers } from 'redux';
import { register } from './user.reducer';
import { authentication } from './authentication.reducer';
import { notification} from './notificationReducer';

const rootReducer = combineReducers({
    register,
    authentication,
    notification
});

export default rootReducer;