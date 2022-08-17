import {combineReducers} from 'redux';
import users from './Task'
import login from './login'
const allReducers = combineReducers({
    login
})
export default allReducers;