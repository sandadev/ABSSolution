import { combineReducers } from 'redux'
import { register } from './user.reducer'
import { authentication } from './authentication.reducer'

const rootReducer = combineReducers({
    register,
    authentication
});

export default rootReducer;